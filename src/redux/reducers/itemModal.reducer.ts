import { ItemModalActions } from '../actions/itemModal.actions';
import { EquipableType, Equipment } from '../../models';

interface ItemModalState {
    position?: number;
    equipWhat?: EquipableType;
    show: boolean;
    item?: Equipment;
}

const initialState = {
    position: undefined,
    equipWhat: undefined,
    show: false,
    item: undefined,
};
const ItemModalReducer = (
    state: ItemModalState = initialState,
    action: ItemModalActions
) => {
    switch (action.type) {
        case 'SHOW_ITEM_MODAL':
            return {
                ...state,
                show: true,
                position: action.payload.position,
                equipWhat: action.payload.equipWhat,
                item: action.payload.item,
            };
        case 'HIDE_ITEM_MODAL':
            return {
                ...state,
                show: false,
            };
        default:
            return state;
    }
};
export default ItemModalReducer;
