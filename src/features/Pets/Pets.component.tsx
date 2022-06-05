import { FC } from 'react';
import { Pet as PetModel } from '../../models';
import { Pet } from './components/Pet/Pet.container';

import './Pets.css';

interface PetsComponentProps {
    pets: PetModel[];
}

export const PetsComponent: FC<PetsComponentProps> = ({ pets }) => {
    const petComponents = pets.map((pet, index) => (
        <Pet key={pet.name + index} index={index} pet={pet} />
    ));
    return (
        <div className="pets-background">
            <div className="pets-header">Pets</div>
            {petComponents}
        </div>
    );
};
