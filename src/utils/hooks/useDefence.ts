import { Dice, rollDie } from '../rollDie';
import { useModifiers } from './useModifiers';
import { executeDefend } from '../../features/Actions/utils';

interface DefenceValues {
    header: string;
    text: string;
    degrade: boolean;
    rollResult: string;
}

interface UseDefence {
    defend: (tier: number) => DefenceValues;
}

export const useDefence = (): UseDefence => {
    const { calculateAction } = useModifiers();
    const defend = (tier: number) => {
        const roll = rollDie(Dice.d20);
        const finalRoll = roll + calculateAction('defence');
        return executeDefend(roll, finalRoll, tier);
    };
    return {
        defend,
    };
};
