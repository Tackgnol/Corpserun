import { Dice, rollDie } from '../../utils/rollDie';

export const attack = (dice: Dice, difficulty: number) => {
    const roll = rollDie(Dice.d20);
    if (roll === 20 || roll === 19) {
        console.log(
            'You swing your weapon hitting your target',
            `You deal ${rollDie(dice)} damage`
        );
    } else if (roll >= difficulty) {
        console.log(
            'The gods smile upon you, the blow struck true',
            `You deal ${rollDie(dice) + rollDie(dice)} damage`
        );
    } else if (roll === 1) {
        console.log('You missed horribly something bad is about to happen');
    } else {
        console.log('You missed your target...');
    }
};
