import React, { FC } from 'react';
import drop from '../assets/chevron-down-solid.svg';
import sell from '../assets/bag.svg';
import equip from '../assets/sword-fill.svg';

interface ItemTooltipProps {
    description?: string;
    onSell: () => void;
    onDrop: () => void;
    onEquip: () => void;
    equipable: boolean;
}

export const ItemTooltip: FC<ItemTooltipProps> = ({
    description,
    equipable,
    onSell,
    onDrop,
    onEquip,
}) => {
    return (
        <div className="equipment-tooltip">
            {description ? (
                <div className="equipment-desription">{description}</div>
            ) : null}
            <hr />
            <div className="equipment-actions ">
                <span className="clickable " onClick={onDrop}>
                    <img className="item-icon" src={drop} alt="drop" />
                </span>
                <span className="clickable " onClick={onSell}>
                    <img className="item-icon" src={sell} alt="sell" />
                </span>
                {equipable ? (
                    <span className="clickable" onClick={onEquip}>
                        <img className="item-icon" src={equip} alt="equip" />
                    </span>
                ) : null}
            </div>
        </div>
    );
};
