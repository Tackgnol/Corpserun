import React, { ChangeEvent, FC } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { AppState } from '../../redux/reducers/root.reducer';
import { Dispatch } from 'redux';
import { EquipmentActions } from '../../redux/actions/equipment.actions';
import { SilverInputComponent } from './SilverInput.component';

interface SilverInputContainerProps {
    id: string;
    tabIndex: number;
}

export const SilverInputContainer: FC<SilverInputContainerProps> = ({
    id,
    tabIndex,
}) => {
    const { silver } = useSelector((state: AppState) => state.equipment);
    const dispatchEquipment = useDispatch<Dispatch<EquipmentActions>>();
    const handleUpdate = (e: ChangeEvent<HTMLInputElement>) => {
        const { value } = e.target;
        const asNumber = +value;
        if (!isNaN(asNumber)) {
            dispatchEquipment({ type: 'UPDATE_SILVER', payload: asNumber });
        }
    };
    return (
        <SilverInputComponent
            id={id}
            tabIndex={tabIndex}
            value={silver}
            onChange={handleUpdate}
        />
    );
};
