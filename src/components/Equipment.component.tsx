import React, { FC } from 'react';
import { Equipment } from '../models';
import ReactTooltip from 'react-tooltip';
import { ItemTooltip } from './ItemTooltip';

interface EquipmentProps {
    id: string;
    item: Equipment;
    onSell: () => void;
    onDrop: () => void;
    onEquip: () => void;
}

export const EquipmentComponent: FC<EquipmentProps> = ({
    id,
    item,
    onEquip,
    onDrop,
    onSell,
}) => {
    let tip: HTMLSpanElement | null;
    const equipable =
        item.tags.includes('weapon') ||
        item.tags.includes('armor') ||
        item.tags.includes('scroll');

    const close = () => {
        if (tip) {
            ReactTooltip.hide(tip);
        }
    };
    const actionAndClose = (action: () => void) => {
        return () => {
            action();
            close();
        };
    };
    return (
        <div id={id} className="equipment-item">
            <div className="equipment-name">
                <span
                    ref={(ref) => (tip = ref)}
                    data-tip
                    data-for={item.name}
                    data-event="click"
                >
                    {item.name}
                    {item.count ? ` (${item.count})` : undefined}
                </span>
            </div>
            <ReactTooltip clickable={true} id={item.name} effect="solid">
                <ItemTooltip
                    description={item.description}
                    onSell={actionAndClose(onSell)}
                    onDrop={actionAndClose(onDrop)}
                    onEquip={actionAndClose(onEquip)}
                    equipable={equipable}
                />
            </ReactTooltip>
        </div>
    );
};
