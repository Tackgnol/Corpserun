import { ActionModalActions } from '../actions/actionModal.actions';
import { ActionType, BaseStats } from '../../models';

interface ActionModalState {
    show: boolean;
    header: string;
    text: string;
    rollResult: string;
    type: ActionType;
    statistic: keyof BaseStats;
    burn: boolean;
}

const initialState = {
    show: false,
    header: '',
    text: '',
    rollResult: '',
    type: 'melee' as ActionType,
    statistic: 'strength' as keyof BaseStats,
    burn: false,
};
const ActionModalReducer = (
    state: ActionModalState = initialState,
    action: ActionModalActions
) => {
    switch (action.type) {
        case 'SHOW_ACTION_MODAL':
            return {
                ...state,
                show: true,
                text: action.payload.text,
                header: action.payload.header,
                rollResult: action.payload.rollResult,
                type: action.payload.type,
                statistic: action.payload.statistic,
                burn: action.payload.burn,
            };
        case 'HIDE_ACTION_MODAL':
            return {
                ...initialState,
                show: false,
            };
        default:
            return state;
    }
};
export default ActionModalReducer;
