import { FC } from 'react';
import { SilverComponent } from './Silver.component';
import { useSelector } from 'react-redux';
import { AppState } from '../../../../redux/reducers/root.reducer';

export const Silver: FC = () => {
    const { silver } = useSelector((state: AppState) => state.equipment);
    return <SilverComponent amount={silver} />;
};
