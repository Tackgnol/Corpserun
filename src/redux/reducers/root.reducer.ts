import { combineReducers } from 'redux';
import HPReducer from './hp.reducer';
import StatReducer from './stat.reducer';
import InfoReducer from './info.reducer';
import EquipmentReducer from './equipment.reducer';

const rootReducer = combineReducers({
    hp: HPReducer,
    stats: StatReducer,
    info: InfoReducer,
    equipment: EquipmentReducer,
});
export type AppState = ReturnType<typeof rootReducer>;
export default rootReducer;
