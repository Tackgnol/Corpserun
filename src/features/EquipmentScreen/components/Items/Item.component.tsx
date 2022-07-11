import { FC } from 'react';
import { Armor, Equipment } from '../../../../models';
import { ItemSelect } from '../../../../components/Select/Select';

interface ItemProps {
    item?: Equipment;
    ammo?: number;
    onClick: () => void;
    count: number;
}

export const ItemComponent: FC<ItemProps> = ({
    item,
    ammo,
    onClick,
    count,
}) => {
    if (!item) {
        return (
            <div className="row item-row">
                <div className="item-background col-12">
                    <ItemSelect />
                </div>
            </div>
        );
    }

    const asArmor = item as Armor;
    const tierString =
        asArmor.currentTier && count === 1
            ? `, current tier: ${asArmor.currentTier}`
            : undefined;
    return (
        <div className="row item-row">
            <div
                className={`item-background ${
                    count === 1 ? 'col-12' : 'col-9'
                } `}
            >
                <div
                    className="item-title ms-3 ms-md-4 ms-xl-4"
                    onClick={onClick}
                >
                    {item.name}
                    {ammo ? ` (${ammo})` : ''}
                    <br />
                    {item.description}
                    {tierString}
                </div>
            </div>
            {count > 1 ? (
                <div className="item-count col-2" onClick={onClick}>
                    x{count}
                </div>
            ) : null}
        </div>
    );
};
