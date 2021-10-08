import { EquipmentActions } from '../actions/equipment.actions';
import { Armor, Equipment, PlayerEquipment, Weapon } from '../../models';
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
        case 'EQUIP_WEAPON':
            const weapon = { ...state.items[action.payload] } as Weapon;
            if (!weapon.count) {
                if (weapon.amount) {
                    weapon.count = weapon.amount.max;
                }
            }
            let weaponObject: {
                primaryWeapon: Weapon | null;
                secondaryWeapon: Weapon | null;
            };
            let backToInventory: Equipment | null = null;
            if (state.primaryWeapon) {
                if (state.secondaryWeapon) {
                    weaponObject = {
                        primaryWeapon: weapon,
                        secondaryWeapon: state.primaryWeapon,
                    };
                    backToInventory = state.secondaryWeapon;
                }
                weaponObject = {
                    primaryWeapon: state.primaryWeapon,
                    secondaryWeapon: weapon,
                };
            } else {
                weaponObject = { primaryWeapon: weapon, secondaryWeapon: null };
            }
            if (backToInventory) {
                state.items.push(backToInventory);
            }
            return {
                ...state,
                ...weaponObject,
                items: state.items.filter(
                    (i, index) => index !== action.payload
                ),
            } as PlayerEquipment;
        case 'UNEQUIP_WEAPON':
            const removedWeapon = state[action.payload];
            if (!removedWeapon) {
                return { ...state };
            }
            const withWeapon = [...state.items, removedWeapon];
            return {
                ...state,
                [action.payload]: null,
                items: withWeapon,
            };
        case 'EQUIP_ARMOR':
            if (!state.armor) {
                return {
                    ...state,
                    armor: state.items[action.payload] as Armor,
                    items: state.items.filter(
                        (i, index) => index !== action.payload
                    ),
                };
            } else {
                const withArmor = [...state.items, state.armor];
                return {
                    ...state,
                    armor: state.items[action.payload] as Armor,
                    items: withArmor.filter(
                        (i, index) => index !== action.payload
                    ),
                };
            }
        case 'UNEQUIP_ARMOR':
            if (!state.armor) {
                return { ...state };
            }
            const withArmor = [...state.items, state.armor];
            return {
                ...state,
                armor: null,
                items: withArmor,
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
