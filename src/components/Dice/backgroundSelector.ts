import { Dice } from '../../utils/rollDie';

import d4 from '../../assets/Dice/4.png';
import d6 from '../../assets/Dice/6.png';
import d8 from '../../assets/Dice/8.png';
import d10 from '../../assets/Dice/10.png';
import d12 from '../../assets/Dice/12.png';
import d20 from '../../assets/Dice/20.png';
import d100 from '../../assets/Dice/100.png';

export const backgroundSelector = (die: Dice) => {
    switch (die) {
        case Dice.d2:
        case Dice.d3:
        case Dice.d6:
            return d6;
        case Dice.d4:
            return d4;
        case Dice.d8:
            return d8;
        case Dice.d10:
            return d10;
        case Dice.d12:
            return d12;
        case Dice.d20:
            return d20;
        case Dice.d100:
            return d100;
    }
};
