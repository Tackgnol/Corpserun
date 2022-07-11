import { Dice } from './utils/rollDie';

export type DiceMode = 'Description' | 'Simulate Roll';

export interface Settings {
    diceMode: DiceMode;
}

export interface BaseData {
    name: string;
    exp: boolean;
}

export interface GameData {
    armors: Armor[];
    weapons: Weapon[];
    equipment: Equipment[];
    tales: Tale[];
    habits: Habit[];
    traits: string[];
    pets: Pet[];
    body: string[];
}

export interface Armor extends Equipment, WithModifiers {
    dice: Dice[];
    maxTier: number;
    currentTier?: number;
}

export interface Weapon extends Equipment, WithModifiers {
    dice: Dice[];
    effectDie?: Dice;
    effect?: DieEffects;
    damageModifier?: number;
}

export interface Equipment extends BaseData {
    mod?: keyof BaseStats;
    tags: string[];
    hp?: number;
    roll?: number;
    description?: string;
    value?: number;
    count?: number;
    dice?: Dice[];
    use?: Use;
    ammo?: Ammo;
    multiple?: number;
}

export interface Ammo {
    type: string;
    startWith: number;
}

export interface Tale extends BaseData {
    roll?: number;
    items: Equipment[];
}

export interface Habit extends BaseData {
    roll?: number;
    items: Equipment[];
}

export interface CharacterGenerator {
    generate: () => Character;
}

export interface CharacterTemplate {
    className: string;
    stats: TemplateStat[];
    origins: string[];
    appendix: string;
    classAbilities?: Ability[];
    randomAbilities?: Ability[];
    weapon: Dice;
    armor: Dice;
    randomAbilityCount?: number;
    silver: RollStat;
    hpModifier: Dice;
    roll?: number;
    statModifiers?: Modifiers;
}

export interface TemplateStat extends RollStat {
    name: keyof Stats;
}

export interface Character {
    info: Info;
    stats: Stats;
    equipment: Equipment[];
    abilities?: Ability[];
    silver: number;
    pets: Pet[];
    ammo: { [t: string]: number };
}

export type Health = {
    currHP?: number;
    wounded: boolean;
    dead: boolean;
    dizzy?: boolean;
};

export type Info = {
    name: string;
    description: string;
    characterClass?: string;
    classDescription?: string;
    abilities: Ability[];
    abilitiesString?: string;
};

export interface Stats extends BaseStats {
    maxHP: number;
    maxLoad: number;
    omens: number;
}

export interface BaseStats {
    strength: number;
    agility: number;
    presence: number;
    toughness: number;
}

export interface Modifier {
    statistic: keyof BaseStats;
    source: string;
    value: number;
    exclude?: ActionType[];
    cancelable?: boolean;
}

export type PlayerEquipment = {
    primaryWeapon: Weapon | null;
    secondaryWeapon: Weapon | null;
    armor: Armor | null;
    scrolls: Equipment[];
    items: Equipment[];
    silver: number;
    currLoad: number;
};

export type RollStat = {
    dice: Dice[];
    modifier?: number;
    rerolledOn?: number;
};

export interface Ability extends WithModifiers {
    name: string;
    description: string;
    dice?: Dice;
    difficulty?: number;
    roll?: number;
    effectRoll?: Dice;
    effects?: DieEffects;
    gainItem?: string;
    gainPet?: string;
    successText?: string;
    failureText?: string;
    statistic?: keyof BaseStats;
}

export type EquipableType = EquippedWeapon | 'armor';

export interface CharacterAction extends CharacterActionProps {
    type: ActionType;
}

export interface CharacterActionProps {
    info: string;
    effectDie?: Dice;
    modifier?: number;
    effectModifier?: number;
    successDie?: Dice;
    successDifficulty?: number;
    weaponType?: EquippedWeapon;
    spellText?: string;
    uses?: number;
    ammoType?: string;
    effects?: DieEffects;
    damageDie?: Dice[];
    statistic: keyof BaseStats;
    showOnlyDie?: boolean;
}

export interface CharacterAttackAction extends CharacterActionProps {
    damageDie: Dice[];
}

export interface Pet extends Equipment, WithModifiers {
    actionType: Extract<ActionType, 'melee' | 'ranged' | 'buff'>;
    hp: number;
    actionDie: Dice[];
    attackRoll?: number;
    defenceRoll?: number;
    buff?: Modifiers;
    amount?: number | Dice;
}

export interface Use {
    type: ActionType;
    value: number | Dice;
    effectDie?: Dice;
    effects?: DieEffects;
    modify?: keyof Stats;
}

export interface WithModifiers {
    modifiers?: Modifier[];
}

export interface DieEffect {
    text: string;
    gainItem?: string;
    statuses?: Modifiers;
}

export interface GroupedItems {
    name: string;
    position: number;
    count: number;
}

export type DieEffects = { [key: number]: DieEffect };

export type EquippedWeapon = 'primaryWeapon' | 'secondaryWeapon';

export type ActionType =
    | 'melee'
    | 'ranged'
    | 'heal'
    | 'test'
    | 'cast'
    | 'ability'
    | 'defence'
    | 'buff'
    | 'item';

export type ModalType = ActionType | 'item';

export type Modifiers = Modifier[];
