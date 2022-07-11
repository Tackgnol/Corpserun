import { Modifiers } from '../../models';
import { ModifiersActions } from '../actions/modifiers.actions';
import { cloneDeep } from 'lodash';

export interface ModifierState {
    passive: Modifiers;
    buffs: Modifiers;
}

const initialState: ModifierState = {
    passive: [],
    buffs: [],
};
const ModifiersReducer = (
    state: ModifierState = initialState,
    action: ModifiersActions
) => {
    switch (action.type) {
        case 'SET_PASSIVE_MODIFIERS':
            return { passive: [...action.payload], buffs: [...state.buffs] };
        case 'ADD_CUSTOM_MODIFIER':
            return {
                passive: [...state.passive],
                buffs: [...state.buffs, action.payload],
            };
        case 'REMOVE_CUSTOM_MODIFIER':
            const buffs = cloneDeep(state.buffs);
            return {
                passive: [...state.passive],
                buffs: [...buffs.splice(action.payload, 1)],
            };
        default:
            return { ...state };
    }
};
export default ModifiersReducer;
