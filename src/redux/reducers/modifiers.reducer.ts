import { Modifiers } from '../../models';
import { ModifiersActions } from '../actions/modifiers.actions';

const initialState: Modifiers = [];
const ModifiersReducer = (
    state: Modifiers = initialState,
    action: ModifiersActions
) => {
    switch (action.type) {
        case 'SET_MODIFIERS':
            return [...action.payload];
        default:
            return [...state];
    }
};
export default ModifiersReducer;
