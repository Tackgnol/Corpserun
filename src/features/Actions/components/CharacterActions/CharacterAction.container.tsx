import { FC } from 'react';
import { Dice } from '../../../../utils/rollDie';
import { CharacterActionComponent } from './CharacterAction.component';
import { attack } from '../../utils';

export interface CharacterActionProps {
    text: string;
    dice: Dice;
    type: 'attack' | 'cast' | 'ability';
}

export const CharacterAction: FC<CharacterActionProps> = ({
    text,
    dice,
    type,
}) => {
    const useAbility = () => {
        switch (type) {
            case 'attack':
                attack(dice, 10);
                break;
            default:
                console.log('not implemented!');
        }
    };
    return (
        <CharacterActionComponent
            dice={dice}
            text={text}
            useAbility={useAbility}
        />
    );
};
