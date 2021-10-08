import {
    Ability,
    Character,
    CharacterGenerator,
    CharacterTemplate,
    Equipment,
    Habit,
    Health,
    Info,
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
    private health?: Health;
    private stats: Stats = {
        maxHP: 0,
        strength: 0,
        agility: 0,
        presence: 0,
        toughness: 0,
        omens: 0,
    };
    private abilities?: Ability[];
    private equipment: Equipment[] = [];
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
        if (this.stats && this.info) {
            return {
                stats: this.stats,
                info: this.info,
                equipment: this.equipment ?? [],
                abilities: this.abilities ?? [],
                silver: this.silver,
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
            classDescription: `\nYour past: \n${rollOnTableString(origins)}`,
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
    }

    private rollGear = () => {
        const carry = this.carryEquipmentRoll();
        const accessory = this.accessoryRoll();
        const special = this.specialRoll();
        if (carry) {
            this.equipment?.push(carry);
        }
        if (accessory) {
            this.equipment?.push(accessory);
        }
        if (special) {
            this.equipment.push(special);
        }
        this.equipment.push(this.rollWeapon());
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
                const torches = findItem('Torches');
                return {
                    ...torches,
                    count: getModifier(this.stats.presence) + 4,
                };
            case 3:
                const lantern = findItem('lantern');
                return {
                    ...lantern,
                    count: getModifier(this.stats.presence) + 6,
                };
            case 4:
                return findItem('Magnesium strip');
            case 5:
                return getScroll('unclean');
            case 6:
                return findItem('sharp needle');
            case 7:
                const chest = findItem('medicine chest');
                return {
                    ...chest,
                    count: getModifier(this.stats.presence) + 4,
                };
            case 8:
                return findItem('Metal file and lockpicks');
            case 9:
                return findItem('bear trap');
            case 10:
                return findItem('bomb');
            case 11:
                const redPotion = findItem('A bottle of red poison');
                return {
                    ...redPotion,
                    count: rollDie(Dice.d4),
                };
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
                return {
                    ...lifeElixir,
                    count: rollDie(Dice.d6),
                };
            case 2:
                return getScroll('sacred');
            case 3:
                return findItem('Small but vicious dog');
            case 4:
                const monkeys = findItem('Monkeys that ignore but love you');
                return {
                    ...monkeys,
                    count: rollDie(Dice.d4),
                };
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
}
