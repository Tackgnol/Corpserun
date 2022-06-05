import { Settings } from '../../models';
import { SettingsActions } from '../actions/settings.actions';

const initialState: Settings = {
    diceMode: 'Description',
};
const SettingsReducer = (
    state: Settings = initialState,
    action: SettingsActions
) => {
    switch (action.type) {
        case 'SET_DICE_MODE':
            return { ...state, diceMode: action.payload };
        default:
            return state;
    }
};
export default SettingsReducer;
