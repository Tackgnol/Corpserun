import { Dice, rollDie } from '../../utils/rollDie';
import { ActionText } from '../../models';

export const attack = (dice: Dice, difficulty: number): ActionText => {
    const roll = rollDie(Dice.d20);
    if (roll === 20 || roll === 19) {
        return {
            header: 'You swing your weapon hitting your target',
            damageText: `You deal ${rollDie(dice)} damage`,
        };
    } else if (roll >= difficulty) {
        return {
            header: 'The gods smile upon you, the blow struck true',
            damageText: `You deal ${rollDie(dice) + rollDie(dice)} damage`,
        };
    } else if (roll === 1) {
        return {
            header: 'You missed horribly something bad is about to happen',
        };
    } else {
        return { header: 'You missed your target...' };
    }
};
