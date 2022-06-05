import React, { FC } from 'react';
import { Armor, Weapon } from '../models';

interface WeaponComponentProps {
    id: string;
    item: Weapon | Armor | null;
    ammo?: number;
}

export const EquipableComponent: FC<WeaponComponentProps> = ({
    id,
    ammo,
    item,
}) => {
    return (
        <div id={id} className="equipment-item">
            <div className="equipment-name">
                {item?.name} {item?.description}
                {ammo ? `(${ammo})` : null}
            </div>
        </div>
    );
};
