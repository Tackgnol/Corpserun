import { ChangeEvent, Dispatch, FC } from 'react';
import { SilverComponent } from './Silver.component';
import { useDispatch, useSelector } from 'react-redux';
import { AppState } from '../../../../redux/reducers/root.reducer';
import { EquipmentActions } from '../../../../redux/actions/equipment.actions';

export const Silver: FC = () => {
    const { silver } = useSelector((state: AppState) => state.equipment);
    const silverDispatch = useDispatch<Dispatch<EquipmentActions>>();
    const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
        const {
            target: { value },
        } = e;
        silverDispatch({ type: 'UPDATE_SILVER', payload: +value });
    };
    return <SilverComponent amount={silver} onChange={handleChange} />;
};
