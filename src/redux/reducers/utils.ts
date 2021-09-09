import { Dice, rollDie } from '../../utils/rollDie';
import { getModifier } from '../../utils/modifiers';
import { Health, Stats } from '../../models';

export const newStats = (
    state: Stats,
    newStat: { [name in keyof Stats]: number }
): Stats => {
    const statNames = Object.keys(newStat);
    const toughnessIndex = statNames.indexOf('toughness');
    if (toughnessIndex !== -1) {
        const hp = rollDie(Dice.d8) + getModifier(newStat['toughness']);
        return {
            ...state,
            ...newStat,
            maxHP: hp <= 0 ? 1 : hp,
        };
    }
    return {
        ...state,
        ...newStat,
    };
};

export const living = (diff: number, currentHP?: number): Partial<Health> => {
    if (typeof currentHP !== 'undefined') {
        const newHP = currentHP + diff;
        console.log(newHP, currentHP, diff);
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
