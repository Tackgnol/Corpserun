import { Dice, rollDie } from '../rollDie';
import { ActionType, DieEffects } from '../../models';
import { useModifiers } from './useModifiers';
import { executeAttack } from '../../features/Actions/utils';

interface AttackValues {
    header: string;
    text: string;
    rollResult: string;
    broken: boolean;
}

interface UseAttack {
    attack: (
        dice: Dice[],
        type: Extract<ActionType, 'melee' | 'ranged'>,
        modifier?: number,
        ammo?: number,
        damageModifier?: number,
        effectDie?: Dice,
        effectTable?: DieEffects
    ) => AttackValues;
}

export const useAttack = (): UseAttack => {
    const { calculateAction } = useModifiers();

    const attack = (
        dice: Dice[],
        type: Extract<ActionType, 'melee' | 'ranged'>,
        modifier = 0,
        ammo?: number,
        damageModifier = 0
    ): AttackValues => {
        const roll = rollDie(Dice.d20);
        const withModifier = roll + modifier;
        const finalRoll = withModifier + calculateAction(withModifier, type);
        return executeAttack(dice, roll, finalRoll, ammo, damageModifier);
    };
    return { attack };
};
