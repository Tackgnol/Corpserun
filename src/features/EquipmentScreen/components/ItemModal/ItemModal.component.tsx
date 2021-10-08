import { FC } from 'react';
import { Equipment } from '../../../../models';

interface ItemModalComponentProps {
    item: Equipment;
    equipable: boolean;
    equiped: boolean;
    onDrop: () => void;
    onSell: () => void;
    onEquip: () => void;
}

export const ItemModalComponent: FC<ItemModalComponentProps> = ({
    item,
    equipable,
    equiped,
    onEquip,
    onDrop,
    onSell,
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
            <div className="row item-action-container justify-content-center">
                {!equiped && (
                    <div className="col col-4">
                        <div className="item-drop" onClick={onDrop}></div>
                        <span className="item-action text-center">Drop</span>
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
