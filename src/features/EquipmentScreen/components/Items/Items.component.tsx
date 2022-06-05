import { FC } from 'react';
import { GroupedItems } from '../../../../models';
import { Item } from './Item.container';

interface ItemsComponentProps {
    items: GroupedItems[];
}

export const ItemsComponent: FC<ItemsComponentProps> = ({ items }) => {
    const renderedItems = items.map((item) => (
        <Item position={item.position} key={item.name} count={item.count} />
    ));

    return (
        <div className="items-container">
            {renderedItems}
            <Item position={undefined} count={1} />
        </div>
    );
};
