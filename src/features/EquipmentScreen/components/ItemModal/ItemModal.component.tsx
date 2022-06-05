import React, { FC } from 'react';
import { Equipment } from '../../../../models';
import { AmmoInput } from '../../../../components/AmmoInput/AmmoInput.container';

interface ItemModalComponentProps {
    item: Equipment;
    equipable: boolean;
    equiped: boolean;
    consumable: boolean;
    usable: boolean;
    onDrop: () => void;
    onSell: () => void;
    onEquip: () => void;
    onUse: () => void;
    ammoType?: string;
}

export const ItemModalComponent: FC<ItemModalComponentProps> = ({
    item,
    equipable,
    usable,
    consumable,
    equiped,
    onEquip,
    onDrop,
    onSell,
    onUse,
    ammoType,
}) => {
    if (!item) {
        return (
            <span className="item-modal-name text-center w-100">
                No item :(
            </span>
        );
    }
    return (
        <div className="item-modal-container">
            <div className="d-flex item-info-container text-center">
                <span className="item-modal-name text-center w-100">
                    {item.name}
                </span>
                <span className="item-modal-description__big">
                    {item.description}
                </span>
            </div>
            <div className="item-modal-separator">&nbsp;</div>
            {ammoType ? (
                <>
                    <AmmoInput ammoType={ammoType} />
                </>
            ) : null}
            <div className="row item-action-container justify-content-center">
                {!equiped && (
                    <div className="col col-4">
                        <div className="item-drop" onClick={onDrop}></div>
                        <span className="item-action text-center">Drop</span>
                    </div>
                )}
                {((usable && item.use) || consumable) && (
                    <div className="col col-4">
                        <div className="item-use" onClick={onUse}></div>
                        <span className="item-action text-center">Use</span>
                    </div>
                )}
                {equipable && (
                    <div className="col col-4" onClick={onEquip}>
                        <div className="item-equip"></div>
                        <span className="item-action text-center">
                            {equiped ? 'Unequip' : 'Equip'}
                        </span>
                    </div>
                )}
                {!equiped && (
                    <div className="col col-4">
                        <div className="item-sell" onClick={onSell}></div>
                        <span className="item-action text-center">Sell</span>
                    </div>
                )}
            </div>
        </div>
    );
};
