import { FC } from 'react';
import { Dice as DiceType, rollDie } from '../../utils/rollDie';

interface DiceProps {
    die: DiceType;
}

export const Dice: FC<DiceProps> = ({ die }) => {
    const handleClick = () => {
        console.log(rollDie(die));
    };
    return null;
};
