import { FC } from 'react';
import { Armor, Equipment } from '../../../../models';
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
    const amount = item.amount ? `(${item.amount.curr})` : undefined;
    const asArmor = item as Armor;
    const tierString = asArmor.currentTier
        ? `Current tier: ${asArmor.currentTier}`
        : undefined;
    return (
        <div className="row">
            <div className="item-background col-12">
                <div className="item-title ms-lg-5 ms-3" onClick={onClick}>
                    {item.name}
                    {amount} {item.description} {tierString}
                </div>
            </div>
        </div>
    );
};
