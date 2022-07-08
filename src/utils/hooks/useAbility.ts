import { useModifiers } from './useModifiers';
import { executeAbility } from '../../features/Actions/utils';
import { Dice, rollDie } from '../rollDie';
import { BaseStats, DieEffects, Modifiers } from '../../models';

interface AbilityValues {
    header: string;
    text: string;
    gainItem?: string;
    applyModifiers?: Modifiers;
    rollResult: string;
}

interface UseAbility {
    ability: (
        effectDie: Dice,
        effects: DieEffects,
        successDie?: Dice,
        successDifficulty?: number,
        statistic?: keyof BaseStats,
        modifier?: number
    ) => AbilityValues;
}

export const useAbility = (): UseAbility => {
    const { calculateAbility } = useModifiers();
    const ability = (
        effectDie: Dice,
        effects: DieEffects,
        successDie?: Dice,
        successDifficulty = 12,
        statistic?: keyof BaseStats,
        modifier = 0
    ) => {
        const roll = rollDie(successDie ?? Dice.d20);
        const withModifier = roll + modifier;
        const finalRoll =
            withModifier + calculateAbility(withModifier, statistic);
        return executeAbility(
            roll,
            finalRoll,
            effectDie,
            effects,
            successDie,
            successDifficulty
        );
    };
    return { ability };
};
