import { FC } from 'react';
import { MainhandComponent } from './Mainhand.component';
import { useDispatch, useSelector } from 'react-redux';
import { AppState } from '../../../../redux/reducers/root.reducer';
import { Dispatch } from 'redux';
import { ItemModalActions } from '../../../../redux/actions/itemModal.actions';
import { Equipment } from '../../../../models';

export const Mainhand: FC = () => {
    const { primaryWeapon } = useSelector((state: AppState) => state.equipment);
    const modalDispatcher = useDispatch<Dispatch<ItemModalActions>>();
    const handleClick = () => {
        modalDispatcher({
            type: 'SHOW_ITEM_MODAL',
            payload: {
                position: -1,
                equipWhat: 'primaryWeapon',
                item: primaryWeapon as Equipment,
            },
        });
    };
    return <MainhandComponent onClick={handleClick} equiped={primaryWeapon} />;
};
