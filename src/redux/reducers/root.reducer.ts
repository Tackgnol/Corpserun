import { combineReducers } from 'redux';
import HPReducer from './hp.reducer';
import StatReducer from './stat.reducer';
import InfoReducer from './info.reducer';
import EquipmentReducer from './equipment.reducer';
import ItemModalReducer from './itemModal.reducer';
import ActionModalReducer from './actionModal.reducer';
import DrawerReducer from './drawer.reducer';

const rootReducer = combineReducers({
    hp: HPReducer,
    stats: StatReducer,
    info: InfoReducer,
    equipment: EquipmentReducer,
    itemModal: ItemModalReducer,
    actionModal: ActionModalReducer,
    drawer: DrawerReducer,
});
export type AppState = ReturnType<typeof rootReducer>;
export default rootReducer;
