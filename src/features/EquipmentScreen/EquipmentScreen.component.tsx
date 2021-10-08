import React, { FC } from 'react';
import { Armor, Mainhand, Offhand } from './components';
import { Silver } from './components/Silver/Silver.container';
import { Items } from './components/Items';
import { ItemModal } from './components/ItemModal/ItemModal.container';

export const EquipmentScreenComponent: FC = () => {
    return (
        <div className="page equipment-page ">
            <Mainhand />
            <Offhand />
            <Armor />
            <Silver />
            <Items />
            <ItemModal />
        </div>
    );
};
