import { Equipment } from '../../models';

export interface EquipWeapon {
    readonly type: 'EQUIP_WEAPON';
    payload: number;
}

export interface UnequipWeapon {
    readonly type: 'UNEQUIP_WEAPON';
    payload: 'primaryWeapon' | 'secondaryWeapon';
}

export interface LoseWeapon {
    readonly type: 'LOSE_WEAPON';
    payload: 'primaryWeapon' | 'secondaryWeapon';
}

export interface DropItem {
    readonly type: 'DROP_ITEM';
    payload: number;
}

export interface SellItem {
    readonly type: 'SELL_ITEM';
    payload: number;
}

export interface GainItem {
    readonly type: 'GAIN_ITEM';
    payload: Equipment;
}

export interface UpdateSilver {
    readonly type: 'UPDATE_SILVER';
    payload: number;
}

export interface EquipArmor {
    readonly type: 'EQUIP_ARMOR';
    payload: number;
}

export interface UnequipArmor {
    readonly type: 'UNEQUIP_ARMOR';
}

export interface EquipScroll {
    readonly type: 'EQUIP_SCROLL';
    payload: number;
}

export interface SetItems {
    readonly type: 'SET_ITEMS';
    payload: Equipment[];
}

export type EquipmentActions =
    | EquipWeapon
    | UnequipWeapon
    | DropItem
    | SellItem
    | GainItem
    | UpdateSilver
    | EquipArmor
    | UnequipArmor
    | EquipScroll
    | SetItems
    | LoseWeapon;
