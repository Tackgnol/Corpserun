import { FC } from 'react';
import { Dice } from '../../../../utils/rollDie';
import { backgroundSelector } from '../../../../components/Dice/backgroundSelector';

interface CharacterActionComponentProps {
    dice: Dice;
    text: string;
    useAbility: () => void;
    usesLeft?: number;
}

export const CharacterActionComponent: FC<CharacterActionComponentProps> = ({
    dice,
    text,
    useAbility,
    usesLeft,
}) => {
    return (
        <div className="action-background" onClick={useAbility}>
            <div className="action-name yellow-outline">
                {text} {usesLeft ? `(${usesLeft})` : null}
            </div>
            <img
                className="action-dice"
                src={backgroundSelector(dice)}
                alt={String(text)}
            />
        </div>
    );
};
