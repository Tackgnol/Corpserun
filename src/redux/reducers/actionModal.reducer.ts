import { ActionModalActions } from '../actions/actionModal.actions';
import { ModalType } from '../../models';

interface ActionModalState {
    show: boolean;
    header: string;
    text: string;
    type: ModalType;
}

const initialState = {
    show: false,
    header: '',
    text: '',
    type: ModalType.attack,
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
                type: action.payload.type,
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
