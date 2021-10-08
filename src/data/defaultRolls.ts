import { Dice } from '../utils/rollDie';

export const defaultRolls = {
    weapon: Dice.d10,
    armor: Dice.d4,
    class: Dice.d6,
    stat: [Dice.d6, Dice.d6, Dice.d6, Dice.d6],
    scroll: Dice.d10,
    omen: Dice.d2,
    randomPower: [Dice.d6],
};
