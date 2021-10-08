import { FC } from 'react';
import { OffhandComponent } from './Offhand.component';
import { useDispatch, useSelector } from 'react-redux';
import { AppState } from '../../../../redux/reducers/root.reducer';
import { Dispatch } from 'redux';
import { ItemModalActions } from '../../../../redux/actions/itemModal.actions';
import { Equipment } from '../../../../models';

export const Offhand: FC = () => {
    const { secondaryWeapon } = useSelector(
        (state: AppState) => state.equipment
    );
    const modalDispatcher = useDispatch<Dispatch<ItemModalActions>>();
    const handleClick = () => {
        modalDispatcher({
            type: 'SHOW_MODAL',
            payload: {
                position: -1,
                equipWhat: 'secondaryWeapon',
                item: secondaryWeapon as Equipment,
            },
        });
    };
    return <OffhandComponent onClick={handleClick} equiped={secondaryWeapon} />;
};
