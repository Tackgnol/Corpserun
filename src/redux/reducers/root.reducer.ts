import { combineReducers } from 'redux';
import HPReducer from './hp.reducer';
import StatReducer from './stat.reducer';
import InfoReducer from './info.reducer';
import EquipmentReducer from './equipment.reducer';
import ItemModalReducer from './itemModal.reducer';
import ActionModalReducer from './actionModal.reducer';
import DrawerReducer from './drawer.reducer';
import PetReducer from './pet.reducer';
import ModifiersReducer from './modifiers.reducer';
import AmmoReducer from './ammo.reducer';
import SettingsReducer from './settings.reducer';

const appReducer = combineReducers({
    hp: HPReducer,
    stats: StatReducer,
    info: InfoReducer,
    equipment: EquipmentReducer,
    itemModal: ItemModalReducer,
    actionModal: ActionModalReducer,
    drawer: DrawerReducer,
    pets: PetReducer,
    modifiers: ModifiersReducer,
    ammo: AmmoReducer,
    settings: SettingsReducer,
});
export type AppState = ReturnType<typeof appReducer>;
const rootReducer = (state: AppState | undefined, action: any) => {
    if (action.type === 'KILL') {
        const settings = state?.settings;
        const newState = appReducer(undefined, action);
        if (settings) {
            newState.settings = settings;
        }
        return newState;
    }

    return appReducer(state, action);
};
export default rootReducer;
