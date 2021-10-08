import { Dice } from './utils/rollDie';

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
    body: string[];
}

export interface Armor extends Equipment {
    dice: Dice;
    maxTier: number;
    currentTier?: number;
}

export interface Weapon extends Equipment {
    dice: Dice;
}

export interface Equipment extends BaseData {
    amount?: Amount;
    mod?: keyof Stats;
    tags: string[];
    hp?: HP;
    roll?: number;
    description?: string;
    value?: number;
    count?: number;
}

export interface Tale extends BaseData {
    roll?: number;
    items: Equipment[];
}

export interface Habit extends BaseData {
    roll?: number;
    items: Equipment[];
}

export interface Amount {
    min: number;
    max: number;
}

export interface HP {
    min: number;
    max: number;
    mod: number;
}

export type OptionType = { label: string; value: string };

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
}

export type Health = {
    currHP?: number;
    wounded: boolean;
    dead: boolean;
};

export type Info = {
    name: string;
    description: string;
    characterClass?: string;
    classDescription?: string;
    abilities: Ability[];
    abilitiesString?: string;
};

export type Stats = {
    maxHP: number;
    strength: number;
    agility: number;
    presence: number;
    toughness: number;
    omens: number;
};

export type PlayerEquipment = {
    primaryWeapon: Weapon | null;
    secondaryWeapon: Weapon | null;
    armor: Armor | null;
    scrolls: Equipment[];
    items: Equipment[];
    silver: number;
};

export type RollStat = {
    dice: Dice[];
    modifier?: number;
    rerolledOn?: number;
};

export interface Ability {
    name: string;
    description: string;
    dice?: Dice;
    difficulty?: number;
    roll?: number;
}

export interface ItemModalValues {
    itemPosition: number;
    unequipWhat?: EquipableType;
}

export type EquipableType = 'primaryWeapon' | 'secondaryWeapon' | 'armor';
