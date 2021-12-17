import React, { FC } from 'react';
import { Armor, Weapon } from '../models';

interface WeaponComponentProps {
    id: string;
    item: Weapon | Armor | null;
}

export const EquipableComponent: FC<WeaponComponentProps> = ({ id, item }) => {
    return (
        <div id={id} className="equipment-item">
            <div className="equipment-name">
                {item?.name} {item?.description}
                {item?.count ? `(${item.count})` : null}
            </div>
        </div>
    );
};
