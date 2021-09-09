import { HPActions } from '../actions/hp.actions';
import { living } from './utils';
import { Health } from '../../models';

const initialState: Health = {
    wounded: false,
    dead: false,
};
const HPReducer = (state: Health = initialState, action: HPActions) => {
    switch (action.type) {
        case 'TAKE_DAMAGE':
            return {
                ...state,
                ...living(-1, state.currHP),
            };
        case 'HEAL_DAMAGE':
            return {
                ...state,
                ...living(1, state.currHP),
            };
        case 'SET_HEALTH':
            return {
                ...state,
                ...action.payload,
            };
        default:
            return state;
    }
};
export default HPReducer;
