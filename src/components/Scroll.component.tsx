import React, { FC } from 'react';
import { Equipment } from '../models';

interface ScrollComponentProps {
    id: string;
    scroll: Equipment;
}

export const ScrollComponent: FC<ScrollComponentProps> = ({ id, scroll }) => {
    return (
        <div className="equipment-item" id={id}>
            <span className="equipment-name">{scroll.name}</span>
        </div>
    );
};
