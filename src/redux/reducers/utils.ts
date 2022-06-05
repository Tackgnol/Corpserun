import { Dice, rollDie } from '../../utils/rollDie';
import { getModifier } from '../../utils/modifiers';
import { Health } from '../../models';

export const rollMaxHP = (toughness: number): number => {
    const hp = rollDie(Dice.d8) + getModifier(toughness);

    return hp > 0 ? hp : 1;
};

export const living = (diff: number, currentHP?: number): Partial<Health> => {
    if (typeof currentHP !== 'undefined') {
        const newHP = currentHP + diff;
        if (newHP === 0) {
            return {
                currHP: newHP,
                wounded: true,
                dead: false,
            };
        }
        if (newHP < 0) {
            return {
                currHP: -1,
                wounded: false,
                dead: true,
            };
        }
        if (newHP > 0) {
            return {
                currHP: newHP,
                wounded: false,
                dead: false,
            };
        }
    }
    return {};
};
