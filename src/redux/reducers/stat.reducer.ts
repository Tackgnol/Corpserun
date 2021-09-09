import { StatActions } from '../actions/stat.actions';
import { newStats } from './utils';
import { Stats } from '../../models';

const initialState: Stats = {
    maxHP: 0,
    strength: 0,
    agility: 0,
    presence: 0,
    toughness: 0,
    omens: 0,
};
const StatReducer = (state: Stats = initialState, action: StatActions) => {
    switch (action.type) {
        case 'SET_STAT':
            return {
                ...state,
                ...newStats(state, action.payload),
            };
        default:
            return state;
    }
};
export default StatReducer;
