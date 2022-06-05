import { FC } from 'react';
import { ItemsComponent } from './Items.component';
import { useSelector } from 'react-redux';
import { AppState } from '../../../../redux/reducers/root.reducer';
import { groupItems } from '../../../../utils/groupItems';

export const Items: FC = () => {
    const { items } = useSelector((state: AppState) => state.equipment);
    const grouped = groupItems(items);
    return <ItemsComponent items={grouped} />;
};
