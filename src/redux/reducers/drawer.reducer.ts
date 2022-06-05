import { DrawerActions } from '../actions/drawer.actions';

interface DrawerState {
    showActionDrawer: boolean;
    showPetDrawer: boolean;
}

const initialState = {
    showActionDrawer: false,
    showPetDrawer: false,
};
const DrawerReducer = (
    state: DrawerState = initialState,
    action: DrawerActions
) => {
    switch (action.type) {
        case 'SHOW_ACTION_DRAWER':
            return {
                ...state,
                showActionDrawer: true,
            };
        case 'HIDE_ACTION_DRAWER':
            return {
                ...state,
                showActionDrawer: false,
            };
        default:
            return state;
    }
};
export default DrawerReducer;
