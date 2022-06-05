import { EquipmentActions } from '../actions/equipment.actions';
import { Armor, Equipment, PlayerEquipment, Weapon } from '../../models';
import { Omit } from 'react-redux';
import { cloneDeep } from 'lodash';

export type WeaponsOnly = Omit<
    PlayerEquipment,
    'items' | 'scrolls' | 'silver' | 'armor' | 'currLoad'
>;

const initialState: PlayerEquipment = {
    primaryWeapon: null,
    secondaryWeapon: null,
    armor: null,
    scrolls: [],
    items: [],
    silver: 0,
    currLoad: 0,
};

const getLoad = (state: PlayerEquipment) => {
    const equiped = [
        state.primaryWeapon,
        state.secondaryWeapon,
        state.armor,
    ].filter(Boolean).length;

    return state.items.length + equiped;
};

const EquipmentReducer = (
    state: PlayerEquipment = initialState,
    action: EquipmentActions
): PlayerEquipment => {
    let newState = cloneDeep(state);
    if (action.type === 'EQUIP_WEAPON') {
        const weapon = { ...state.items[action.payload] } as Weapon;
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
            } else {
                weaponObject = {
                    primaryWeapon: state.primaryWeapon,
                    secondaryWeapon: weapon,
                };
            }
        } else {
            weaponObject = { primaryWeapon: weapon, secondaryWeapon: null };
        }
        if (backToInventory) {
            state.items.push(backToInventory);
        }
        newState = {
            ...state,
            ...weaponObject,
            items: state.items.filter((i, index) => index !== action.payload),
        } as PlayerEquipment;
    } else if (action.type === 'UNEQUIP_WEAPON') {
        const removedWeapon = state[action.payload];
        if (!removedWeapon) {
            return { ...state };
        }
        const withWeapon = [...state.items, removedWeapon];
        newState = {
            ...state,
            [action.payload]: null,
            items: withWeapon,
        };
    } else if (action.type === 'EQUIP_ARMOR') {
        const equipableArmor = state.items[action.payload] as Armor;
        if (!equipableArmor.currentTier) {
            equipableArmor.currentTier = equipableArmor.maxTier;
        }
        if (!state.armor) {
            newState = {
                ...state,
                armor: equipableArmor,
                items: state.items.filter(
                    (i, index) => index !== action.payload
                ),
            };
        } else {
            const withArmor = [...state.items, state.armor];
            newState = {
                ...state,
                armor: equipableArmor as Armor,
                items: withArmor.filter((i, index) => index !== action.payload),
            };
        }
    } else if (action.type === 'UNEQUIP_ARMOR') {
        if (!state.armor) {
            return { ...state };
        }
        const withArmor = [...state.items, state.armor];
        newState = {
            ...state,
            armor: null,
            items: withArmor,
        };
    } else if (action.type === 'SELL_ITEM') {
        newState = {
            ...state,
            silver: state.silver + (state.items[action.payload].value ?? 0),
            items: state.items.filter((i, index) => index !== action.payload),
        } as PlayerEquipment;
    } else if (action.type === 'DROP_ITEM') {
        newState = {
            ...state,
            silver: state.silver + (state.items[action.payload].value ?? 0),
            items: state.items.filter((i, index) => index !== action.payload),
        } as PlayerEquipment;
    } else if (action.type === 'GAIN_ITEM') {
        const { payload } = action;
        const item = { ...payload };
        newState = {
            ...state,
            items: [...state.items, item],
        };
    } else if (action.type === 'UPDATE_SILVER') {
        newState = {
            ...state,
            silver: action.payload,
        };
    } else if (action.type === 'SET_ITEMS') {
        newState = {
            ...state,
            items: action.payload,
        };
    } else if (action.type === 'LOSE_WEAPON') {
        if (action.payload === 'primaryWeapon') {
            newState = {
                ...state,
                primaryWeapon: null,
            };
        } else {
            return {
                ...state,
                secondaryWeapon: null,
            };
        }
    } else {
        if (action.type === 'DEGRADE_ARMOR') {
            if (!state.armor) {
                return { ...state };
            }
            const tier = state.armor.currentTier ?? 0;
            newState =
                tier <= 1
                    ? { ...state, armor: null }
                    : {
                          ...state,
                          armor: {
                              ...state.armor,
                              currentTier: tier - 1,
                          },
                      };
        } else {
            return { ...state } as PlayerEquipment;
        }
    }
    return { ...newState, currLoad: getLoad(newState) };
};
export default EquipmentReducer;
