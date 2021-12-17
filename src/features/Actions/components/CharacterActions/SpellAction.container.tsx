import { CharacterActionComponent } from './CharacterAction.component';
import { castSpell } from '../../utils';
import { CharacterActionProps, ModalType } from '../../../../models';
import { FC } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Dispatch } from 'redux';
import { ActionModalActions } from '../../../../redux/actions/actionModal.actions';
import { AppState } from '../../../../redux/reducers/root.reducer';
import { HPActions } from '../../../../redux/actions/hp.actions';

export const SpellActionContainer: FC<CharacterActionProps> = ({
    text,
    dice,
    modifier,
    spellText,
}) => {
    const hpDispatch = useDispatch<Dispatch<HPActions>>();
    const actionModalDispatch = useDispatch<Dispatch<ActionModalActions>>();
    const { dizzy } = useSelector((state: AppState) => state.hp);
    const handleAbility = () => {
        const { spellHeader, becomeDizzy, spellResult } = castSpell(
            spellText,
            modifier,
            dizzy
        );
        if (becomeDizzy) {
            hpDispatch({ type: 'SET_DIZZY', payload: true });
        }
        actionModalDispatch({
            type: 'SHOW_ACTION_MODAL',
            payload: {
                header: spellHeader,
                type: ModalType.cast,
                text: spellResult,
            },
        });
    };
    return (
        <CharacterActionComponent
            dice={dice}
            text={text}
            useAbility={handleAbility}
        />
    );
};
