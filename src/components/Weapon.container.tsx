import React, { FC } from 'react';
import { WeaponsOnly } from '../redux/reducers/equipment.reducer';
import { useSelector } from 'react-redux';
import { AppState } from '../redux/reducers/root.reducer';
import { EquipableComponent } from './EquipableComponent';

interface WeaponContainerProps {
    id: string;
    type: keyof WeaponsOnly;
}

export const WeaponContainer: FC<WeaponContainerProps> = ({
    id,

    type,
}) => {
    const { equipment } = useSelector((state: AppState) => state);
    const item = equipment[type];
    return <EquipableComponent id={id} item={item} />;
};
