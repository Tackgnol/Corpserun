import { FC } from 'react';
import { ArmorComponent } from './Armor.component';
import { useDispatch, useSelector } from 'react-redux';
import { AppState } from '../../../../redux/reducers/root.reducer';
import { Dispatch } from 'redux';
import { ItemModalActions } from '../../../../redux/actions/itemModal.actions';
import { Equipment } from '../../../../models';

export const Armor: FC = () => {
    const { armor } = useSelector((state: AppState) => state.equipment);
    const modalDispatcher = useDispatch<Dispatch<ItemModalActions>>();
    const handleClick = () => {
        modalDispatcher({
            type: 'SHOW_MODAL',
            payload: {
                position: -1,
                equipWhat: 'armor',
                item: armor as Equipment,
            },
        });
    };
    return <ArmorComponent onClick={handleClick} equiped={armor} />;
};
