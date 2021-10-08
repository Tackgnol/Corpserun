import { FC } from 'react';
import { Equipment } from '../../../../models';

interface ItemProps {
    item?: Equipment;
    onClick: () => void;
}

export const ItemComponent: FC<ItemProps> = ({ item, onClick }) => {
    if (!item) {
        return (
            <div className="row">
                <div className="item-background col col-12">
                    <div className="item-title">Add item!</div>
                </div>
            </div>
        );
    }
    const amount = item.amount ? `(${item.amount.max})` : undefined;
    return (
        <div className="row">
            <div className="item-background col col-12">
                <div className="item-title" onClick={onClick}>
                    {item.name}
                    {amount} {item.description}
                </div>
            </div>
        </div>
    );
};
