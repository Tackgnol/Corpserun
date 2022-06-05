import { FC } from 'react';
import { PetsComponent } from './Pets.component';
import { useSelector } from 'react-redux';
import { AppState } from '../../redux/reducers/root.reducer';

export const Pets: FC = () => {
    const { pets } = useSelector((state: AppState) => state.pets);
    return <PetsComponent pets={pets} />;
};
