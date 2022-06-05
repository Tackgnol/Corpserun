import { FC } from 'react';
import { Dice } from '../../../../utils/rollDie';
import { backgroundSelector } from '../../../../components/Dice/backgroundSelector';

interface CharacterActionComponentProps {
    effectDie: Dice;
    text: string;
    useAbility: () => void;
    usesLeft?: number;
    diceOnly?: boolean;
}

export const CharacterActionComponent: FC<CharacterActionComponentProps> = ({
    effectDie,
    text,
    useAbility,
    usesLeft,
    diceOnly = false,
}) => {
    if (diceOnly) {
        return (
            <div>
                <img
                    className="action-dice"
                    src={backgroundSelector(effectDie)}
                    alt={String(text)}
                    onClick={useAbility}
                />
            </div>
        );
    }
    return (
        <div className="action-background" onClick={useAbility}>
            <div className="action-name yellow-outline">
                {text} {usesLeft ? `(${usesLeft})` : null}
            </div>
            <img
                className="action-dice"
                src={backgroundSelector(effectDie)}
                alt={String(text)}
            />
        </div>
    );
};
