import { groupBy } from 'lodash';
import { Equipment, GroupedItems } from '../models';

export const groupItems = (items: Equipment[]) => {
    const groupedItems = groupBy(items, (i) => i.name);
    const groups: GroupedItems[] = [];
    Object.entries(groupedItems).forEach((acc) => {
        const [key, value] = acc;
        const firstPosition = items.findIndex((i) => i.name === key);
        if (firstPosition !== -1) {
            groups.push({
                position: firstPosition,
                count: value.length,
                name: value[0].name,
            });
        }
    }, []);
    return groups;
};
