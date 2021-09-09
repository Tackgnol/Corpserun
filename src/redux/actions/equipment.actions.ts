import { Equipment } from '../../models';

export interface EquipPrimary {
    readonly type: 'EQUIP_PRIMARY';
    payload: number;
}

export interface EquipSecondary {
    readonly type: 'EQUIP_SECONDARY';
    payload: number;
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

export interface EquipScroll {
    readonly type: 'EQUIP_SCROLL';
    payload: number;
}

export interface SetItems {
    readonly type: 'SET_ITEMS';
    payload: Equipment[];
}

export type EquipmentActions =
    | EquipPrimary
    | EquipSecondary
    | DropItem
    | SellItem
    | GainItem
    | UpdateSilver
    | EquipArmor
    | EquipScroll
    | SetItems;
