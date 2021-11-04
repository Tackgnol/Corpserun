import { FC } from 'react';
import { Dice } from '../../../../utils/rollDie';
import { CharacterActionComponent } from './CharacterAction.component';
import { attack } from '../../utils';
import { useDispatch } from 'react-redux';
import { Dispatch } from 'redux';
import { ActionModalActions } from '../../../../redux/actions/actionModal.actions';

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
    const actionModalDispatch = useDispatch<Dispatch<ActionModalActions>>();
    const useAbility = () => {
        switch (type) {
            case 'attack':
                const { damageText, header } = attack(dice, 10);
                actionModalDispatch({
                    type: 'SHOW_ACTION_MODAL',
                    payload: { header, damageText },
                });
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
