import { FC } from 'react';
import { ItemsComponent } from './Items.component';
import { useSelector } from 'react-redux';
import { AppState } from '../../../../redux/reducers/root.reducer';

export const Items: FC = () => {
    const { items } = useSelector((state: AppState) => state.equipment);

    return <ItemsComponent items={items} />;
};
