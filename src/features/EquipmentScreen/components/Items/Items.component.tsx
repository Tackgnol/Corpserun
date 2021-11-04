import { FC } from 'react';
import { Equipment } from '../../../../models';
import { Item } from './Item.container';

interface ItemsComponentProps {
    items: Equipment[];
}

export const ItemsComponent: FC<ItemsComponentProps> = ({ items }) => {
    const renderedItems = items.map((item, index) => (
        <Item position={index} key={item.name} />
    ));

    return (
        <div className="items-container">
            {renderedItems}
            <Item position={undefined} />
        </div>
    );
};
