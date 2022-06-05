import { PetActions } from '../actions/pet.actions';
import { Pet } from '../../models';

interface PetState {
    pets: Pet[];
}

const initialState: PetState = {
    pets: [],
};

const PetReducer = (state: PetState = initialState, action: PetActions) => {
    let position: number;
    switch (action.type) {
        case 'GAIN_PET':
            return {
                ...state,
                pets: [...state.pets, action.payload],
            };
        case 'LOSE_PET':
            return { ...state, pets: killPet(action.payload, state.pets) };
        case 'HEAL_PET':
            position = action.payload;
            const healedPet = state.pets[position];
            healedPet.hp++;
            return {
                ...state,
                pets: replacePet(position, healedPet, state.pets),
            };
        case 'HURT_PET':
            position = action.payload;
            const hurtPet = state.pets[position];
            hurtPet.hp--;
            if (!hurtPet) {
                return state;
            }
            if (hurtPet.hp <= 0) {
                return { ...state, pets: killPet(position, state.pets) };
            }

            return {
                ...state,
                pets: replacePet(position, hurtPet, state.pets),
            };

        default:
            return state;
    }
};
export default PetReducer;

const killPet = (position: number, pets: Pet[]) => {
    const petCopy = [...pets];
    petCopy.splice(position, 1);
    return petCopy;
};

const replacePet = (position: number, pet: Pet, pets: Pet[]) => {
    const petCopy = [...pets];
    petCopy[position] = pet;
    return petCopy;
};
