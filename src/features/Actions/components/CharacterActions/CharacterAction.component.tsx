import { FC } from 'react';
import { Dice } from '../../../../utils/rollDie';
import { backgroundSelector } from '../../../../components/Dice/backgroundSelector';

interface CharacterActionComponentProps {
    dice: Dice;
    text: string;
    useAbility: () => void;
}

export const CharacterActionComponent: FC<CharacterActionComponentProps> = ({
    dice,
    text,
    useAbility,
}) => {
    return (
        <div className="action-background" onClick={useAbility}>
            <div className="action-name yellow-outline">{text}</div>
            <img
                className="action-dice"
                src={backgroundSelector(dice)}
                alt={String(text)}
            />
        </div>
    );
};
