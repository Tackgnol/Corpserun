import { ChangeEvent, Dispatch, FC } from 'react';
import { ItemsHeaderComponent } from './ItemsHeader.component';
import { useDispatch, useSelector } from 'react-redux';
import { AppState } from '../../../../redux/reducers/root.reducer';
import { EquipmentActions } from '../../../../redux/actions/equipment.actions';

export const ItemsHeader: FC = () => {
    const { silver, currLoad } = useSelector(
        (state: AppState) => state.equipment
    );
    const { maxLoad } = useSelector((state: AppState) => state.stats);
    const silverDispatch = useDispatch<Dispatch<EquipmentActions>>();
    const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
        const {
            target: { value },
        } = e;
        silverDispatch({ type: 'UPDATE_SILVER', payload: +value });
    };
    return (
        <ItemsHeaderComponent
            amount={silver}
            onChange={handleChange}
            currLoad={currLoad}
            maxLoad={maxLoad}
        />
    );
};
