import { ActionModalActions } from '../actions/actionModal.actions';

interface ActionModalState {
    show: boolean;
    header: string;
    damageText: string;
}

const initialState = {
    show: false,
    header: '',
    damageText: '',
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
                damageText: action.payload.damageText,
                header: action.payload.header,
            };
        case 'HIDE_ACTION_MODAL':
            return {
                ...state,
                show: false,
            };
        default:
            return state;
    }
};
export default ActionModalReducer;
