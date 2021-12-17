import { DrawerActions } from '../actions/drawer.actions';

interface DrawerState {
    show: boolean;
}

const initialState = {
    show: false,
};
const DrawerReducer = (
    state: DrawerState = initialState,
    action: DrawerActions
) => {
    switch (action.type) {
        case 'SHOW_DRAWER':
            return {
                ...state,
                show: true,
            };
        case 'HIDE_DRAWER':
            return {
                ...state,
                show: false,
            };
        default:
            return state;
    }
};
export default DrawerReducer;
