import {
    Ability,
    Character,
    CharacterGenerator,
    CharacterTemplate,
    Equipment,
    Habit,
    Info,
    Pet,
    Stats,
    Tale,
} from '../models';
import { Dice, rollDie, rollMultiDie } from '../utils/rollDie';
import { names } from '../data/names';
import { data } from '../assets/gameData';
import {
    multiRollOnTable,
    multiRollOnTableString,
    rollOnTable,
    rollOnTableString,
} from '../utils/rollOnTable';
import { findItem, generateDescription, getScroll } from './utils';
import { getModifier } from '../utils/modifiers';
import { rollMaxHP } from '../redux/reducers/utils';

export class GenerateCharacter implements CharacterGenerator {
    private info?: Info;
    private stats: Stats = {
        maxHP: 0,
        strength: 0,
        agility: 0,
        presence: 0,
        toughness: 0,
        omens: 0,
        maxLoad: 0,
    };
    private abilities?: Ability[];
    private equipment: Equipment[] = [];
    private pets: Pet[] = [];
    private ammo: { [p: string]: number } = {};
    private tale?: Tale;
    private habit?: Habit;
    private disfigurement?: string;
    private silver = 0;

    constructor(private template: CharacterTemplate) {}

    generate(): Character {
        this.rollStats();
        this.rollInfo();
        this.rollAbilities();
        this.rollGear();
        this.rollSilver();
        this.rollMaxLoad();
        if (this.stats && this.info) {
            return {
                stats: this.stats,
                info: this.info,
                equipment: this.equipment ?? [],
                abilities: this.abilities ?? [],
                silver: this.silver,
                pets: this.pets,
                ammo: this.ammo,
            };
        }
        throw new Error('Unable to generate character please try again.');
    }

    private rollStats() {
        this.stats = this.template.stats.reduce((acc, curr) => {
            return {
                ...acc,
                [curr.name]: rollMultiDie(curr.dice) + (curr?.modifier ?? 0),
            };
        }, this.stats);
        this.stats.maxHP = rollMaxHP(this.stats.toughness);
    }

    private rollInfo() {
        const { className, origins } = this.template;

        const characterTraits = multiRollOnTableString(data.traits, 2);
        this.habit = rollOnTable(data.habits);
        if (this.habit.items.length !== 0) {
            this.equipment = [...this.equipment, ...this.habit.items];
        }
        this.tale = rollOnTable(data.tales);
        if (this.tale.items.length !== 0) {
            this.equipment = [...this.equipment, ...this.tale.items];
        }

        this.disfigurement = rollOnTableString(data.body);
        this.info = {
            name: names[Math.floor(Math.random() * names.length)],
            description: generateDescription(
                className,
                characterTraits,
                this.habit?.name,
                this.tale?.name,
                this.disfigurement
            ),
            classDescription: `\nYour past: \n\t${rollOnTableString(origins)}`,
            characterClass: className,
            abilities: this.abilities ?? [],
        };
    }

    private rollAbilities() {
        const {
            template: { randomAbilities, randomAbilityCount, classAbilities },
        } = this;
        const abilities: Ability[] = [];

        if (classAbilities) {
            abilities.push(...classAbilities);
        }
        if (randomAbilityCount) {
            abilities.push(
                ...multiRollOnTable(randomAbilities ?? [], randomAbilityCount)
            );
        }
        this.abilities = abilities;
        this.abilities.forEach((a) => {
            if (a.gainItem) {
                const item = findItem(a.gainItem);
                let items: Equipment[] = [item];
                if (typeof item.multiple === 'number') {
                    items = Array(item.multiple).fill(item);
                }
                items.forEach((i) => {
                    if (i) {
                        this.pushToProperTable(i);
                    }
                });
            }
            if (a.gainPet) {
                const pet = this.findPet(a.gainPet);
                if (pet) {
                    this.pushToProperTable(pet);
                }
            }
        });
    }

    private rollGear = () => {
        const carry = this.carryEquipmentRoll();
        const accessory = this.accessoryRoll();
        const special = this.specialRoll();
        if (carry) {
            this.pushToProperTable(carry);
        }
        if (accessory) {
            if (Array.isArray(accessory)) {
                accessory.forEach((a) => {
                    this.pushToProperTable(a);
                });
            } else {
                this.pushToProperTable(accessory);
            }
        }
        if (special) {
            if (Array.isArray(special)) {
                special.forEach((s) => {
                    this.pushToProperTable(s);
                });
            } else {
                this.pushToProperTable(special);
            }
        }
        const weapon = this.rollWeapon();
        this.loadAmmo(weapon);
        this.equipment.push(weapon);
        this.equipment.push(this.rollArmor());
    };

    private rollSilver() {
        this.silver =
            rollMultiDie(this.template.silver.dice) *
            (this.template.silver.modifier ?? 1);
    }

    private carryEquipmentRoll() {
        const die = rollDie(Dice.d6);

        switch (die) {
            case 3:
                return findItem('Backpack');
            case 4:
                return findItem('Sack');
            case 5:
                return findItem('Small wagon');
            case 6:
                return findItem('Donkey');
            default:
                return undefined;
        }
    }

    private accessoryRoll() {
        const die = rollDie(Dice.d12);
        switch (die) {
            case 1:
                return findItem('Rope');
            case 2:
                this.ammo = {
                    ...this.ammo,
                    Torch: getModifier(this.stats.presence) + 4,
                };
                return findItem('Torches');
            case 3:
                this.ammo = {
                    ...this.ammo,
                    Oil: getModifier(this.stats.presence) + 4,
                };
                return findItem('lantern');
            case 4:
                return findItem('Magnesium strip');
            case 5:
                return getScroll('unclean');
            case 6:
                return findItem('sharp needle');
            case 7:
                const chest = findItem('medicine chest');

                return Array(getModifier(this.stats.presence) + 4).fill(chest);

            case 8:
                return findItem('Metal file and lockpicks');
            case 9:
                return findItem('bear trap');
            case 10:
                return findItem('bomb');
            case 11:
                const redPoison = findItem('A bottle of red poison');
                return Array(rollDie(Dice.d4)).fill(redPoison);

            case 12:
                return findItem('silver crucifix');
            default:
                return undefined;
        }
    }

    private specialRoll() {
        const die = rollDie(Dice.d12);
        switch (die) {
            case 1:
                const lifeElixir = findItem('life elixir');
                return Array(rollDie(Dice.d6)).fill(lifeElixir);
            case 2:
                return getScroll('sacred');
            case 3:
                return this.findPet('Small but vicious dog');
            case 4:
                return {
                    ...this.findPet('Monkey'),
                    amount: rollDie(Dice.d4),
                } as Pet;
            case 5:
                return findItem('Exquisite perfume');
            case 6:
                return findItem('toolbox');
            case 7:
                return findItem('heavy chain');
            case 8:
                return findItem('grappling hook');
            case 9:
                return findItem('Shield');
            case 10:
                return findItem('crowbar');
            case 11:
                return findItem('lard');
            case 12:
                return findItem('tent');
            default:
                return undefined;
        }
    }

    private rollWeapon() {
        const { weapons } = data;
        return rollOnTable(weapons, this.template.weapon);
    }

    private rollArmor() {
        const { armors } = data;
        return rollOnTable(armors, this.template.armor);
    }

    private loadAmmo(item: Equipment) {
        if (item.ammo) {
            this.ammo = { ...this.ammo, [item.ammo.type]: item.ammo.startWith };
        }
    }

    private isPet(item: Equipment) {
        return item.tags.includes('pet');
    }

    private findPet(name: string) {
        return data.pets.find((p) => p.name === name);
    }

    private addPet(pet: Pet) {
        const {
            name,
            description,
            hp,
            attackRoll,
            defenceRoll,
            tags,
            exp,
            actionDie,
            actionType,
            buff,
        } = pet;
        if (hp && actionDie) {
            if (pet.amount) {
                for (let i = 0; i < pet.amount; i++) {
                    this.pets.push({
                        name,
                        hp: hp,
                        description: description ?? '',
                        actionType,
                        actionDie: actionDie,
                        attackRoll,
                        defenceRoll,
                        tags,
                        exp,
                        buff,
                    });
                }
            } else {
                this.pets.push({
                    name,
                    hp: hp,
                    description: description ?? '',
                    actionType,
                    actionDie: actionDie,
                    attackRoll,
                    defenceRoll,
                    tags,
                    exp,
                    buff,
                });
            }
        }
    }

    private pushToProperTable(item: Equipment | Pet) {
        if (this.isPet(item)) {
            this.addPet(item as Pet);
        } else {
            this.equipment.push(item);
        }
    }

    private rollMaxLoad() {
        this.stats.maxLoad = getModifier(this.stats.strength) + 8;
    }
}
