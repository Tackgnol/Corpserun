import { useDispatch, useSelector } from 'react-redux';
import { Dispatch } from 'redux';
import { ItemModalActions } from '../../../../redux/actions/itemModal.actions';
import { FC } from 'react';
import { ItemComponent } from './Item.component';
import { AppState } from '../../../../redux/reducers/root.reducer';

interface ItemProps {
    position?: number;
    count: number;
}

export const Item: FC<ItemProps> = ({ position, count }) => {
    const modalDispatcher = useDispatch<Dispatch<ItemModalActions>>();
    const { items } = useSelector((state: AppState) => state.equipment);
    const ammo = useSelector((state: AppState) => state.ammo);
    const item = typeof position !== 'undefined' ? items[position] : undefined;
    const itemAmmo = ammo[item?.ammo?.type ?? ''];
    const handleClick = () => {
        modalDispatcher({ type: 'SHOW_ITEM_MODAL', payload: { position } });
    };
    return (
        <ItemComponent
            item={item}
            onClick={handleClick}
            ammo={itemAmmo}
            count={count}
        />
    );
};
