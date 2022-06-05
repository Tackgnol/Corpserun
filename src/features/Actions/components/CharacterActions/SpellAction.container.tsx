import { CharacterActionComponent } from './CharacterAction.component';
import { CharacterActionProps } from '../../../../models';
import { FC } from 'react';
import { useDispatch } from 'react-redux';
import { Dispatch } from 'redux';
import { ActionModalActions } from '../../../../redux/actions/actionModal.actions';
import { HPActions } from '../../../../redux/actions/hp.actions';
import { useSpell } from '../../../../utils/hooks/useSpell';
import { Dice } from '../../../../utils/rollDie';

export const SpellActionContainer: FC<CharacterActionProps> = ({
    text,
    effectDie,
    modifier,
    spellText,
}) => {
    const hpDispatch = useDispatch<Dispatch<HPActions>>();
    const actionModalDispatch = useDispatch<Dispatch<ActionModalActions>>();
    const { cast } = useSpell();
    const handleAbility = () => {
        const { header, becomeDizzy, text, rollResult } = cast(
            spellText,
            modifier
        );
        if (becomeDizzy) {
            hpDispatch({ type: 'SET_DIZZY', payload: true });
        }
        actionModalDispatch({
            type: 'SHOW_ACTION_MODAL',
            payload: {
                header: header,
                type: 'cast',
                rollResult,
                text: text,
                burn: true,
            },
        });
    };
    return (
        <CharacterActionComponent
            effectDie={effectDie ?? Dice.d20}
            text={text}
            useAbility={handleAbility}
        />
    );
};
