import React, { FC } from 'react';
import { useSelector } from 'react-redux';
import { AppState } from '../redux/reducers/root.reducer';
import { EquipableComponent } from './EquipableComponent';

interface ArmorContainerProps {
    id: string;
}

export const ArmorContainer: FC<ArmorContainerProps> = ({ id }) => {
    const { armor } = useSelector((state: AppState) => state.equipment);
    if (armor) {
        return <EquipableComponent id={id} item={armor} />;
    }
    return null;
};
