import React, { FC } from 'react';
import { Armor, Mainhand, Offhand } from './components';
import { ItemsHeader } from './components/Silver/ItemsHeader.container';
import { Items } from './components/Items';
import { ItemModal } from './components/ItemModal/ItemModal.container';

export const EquipmentScreenComponent: FC = () => {
    return (
        <div className="page equipment-page ">
            <Mainhand />
            <Offhand />
            <Armor />
            <ItemsHeader />
            <Items />
            <ItemModal />
        </div>
    );
};
