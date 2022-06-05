import { Pet } from '../../models';

interface GainPet {
    readonly type: 'GAIN_PET';
    payload: Partial<Pet>;
}

interface LosePet {
    readonly type: 'LOSE_PET';
    payload: number;
}

interface HurtPet {
    readonly type: 'HURT_PET';
    payload: number;
}

interface HealPet {
    readonly type: 'HEAL_PET';
    payload: number;
}

export type PetActions = GainPet | LosePet | HurtPet | HealPet;
