import { EquipmentActions } from '../actions/equipment.actions';
import { Armor, Equipment, PlayerEquipment } from '../../models';
import { Omit } from 'react-redux';

export type WeaponsOnly = Omit<
    PlayerEquipment,
    'items' | 'scrolls' | 'silver' | 'armor'
>;

export type ArmorOnly = Omit<
    PlayerEquipment,
    'items' | 'scrolls' | 'silver' | 'primaryWeapon' | 'secondaryWeapon'
>;

const initialState: PlayerEquipment = {
    primaryWeapon: null,
    secondaryWeapon: null,
    armor: null,
    scrolls: [],
    items: [],
    silver: 0,
};
const EquipmentReducer = (
    state: PlayerEquipment = initialState,
    action: EquipmentActions
): PlayerEquipment => {
    switch (action.type) {
        case 'EQUIP_PRIMARY':
            const primary = { ...state.items[action.payload] };
            if (!primary.count) {
                if (primary.amount) {
                    primary.count = primary.amount.max;
                }
            }
            return {
                ...state,
                primaryWeapon: primary,
                items: state.items.filter(
                    (i, index) => index !== action.payload
                ),
            } as PlayerEquipment;
        case 'EQUIP_SECONDARY':
            return {
                ...state,
                secondaryWeapon: state.items[action.payload],
                items: state.items.filter(
                    (i, index) => index !== action.payload
                ),
            } as PlayerEquipment;
        case 'EQUIP_ARMOR':
            return {
                ...state,
                armor: state.items[action.payload] as Armor,
                items: state.items.filter(
                    (i, index) => index !== action.payload
                ),
            };
        case 'SELL_ITEM':
            return {
                ...state,
                silver: state.silver + (state.items[action.payload].value ?? 0),
                items: state.items.filter(
                    (i, index) => index !== action.payload
                ),
            } as PlayerEquipment;
        case 'DROP_ITEM':
            return {
                ...state,
                silver: state.silver + (state.items[action.payload].value ?? 0),
                items: state.items.filter(
                    (i, index) => index !== action.payload
                ),
            } as PlayerEquipment;
        case 'GAIN_ITEM':
            return {
                ...state,
                items: [...state.items, action.payload],
            };
        case 'UPDATE_SILVER':
            return {
                ...state,
                silver: action.payload,
            };
        case 'EQUIP_SCROLL':
            state.scrolls.push(state.items[action.payload] as Equipment);
            return {
                ...state,
                items: state.items.filter(
                    (i, index) => index !== action.payload
                ),
            };
        case 'SET_ITEMS':
            return {
                ...state,
                items: action.payload,
            };
        default:
            return { ...state } as PlayerEquipment;
    }
};
export default EquipmentReducer;
