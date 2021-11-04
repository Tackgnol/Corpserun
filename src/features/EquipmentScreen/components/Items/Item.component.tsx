import { FC } from 'react';
import { Equipment } from '../../../../models';
import { CustomSelect } from '../../../../components/Select/Select';

interface ItemProps {
    item?: Equipment;
    onClick: () => void;
}

export const ItemComponent: FC<ItemProps> = ({ item, onClick }) => {
    if (!item) {
        return (
            <div className="row">
                <div className="item-background col-12">
                    <CustomSelect />
                </div>
            </div>
        );
    }
    const amount = item.amount ? `(${item.amount.max})` : undefined;
    return (
        <div className="row">
            <div className="item-background col-12">
                <div className="item-title ms-lg-4 ms-2" onClick={onClick}>
                    {item.name}
                    {amount} {item.description}
                </div>
            </div>
        </div>
    );
};
