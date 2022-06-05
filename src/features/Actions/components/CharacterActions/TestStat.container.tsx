import { CharacterActionComponent } from './CharacterAction.component';
import { CharacterActionProps } from '../../../../models';
import { FC } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Dispatch } from 'redux';
import { ActionModalActions } from '../../../../redux/actions/actionModal.actions';
import { useTest } from '../../../../utils/hooks/useTest';
import { getModifier } from '../../../../utils/modifiers';
import { AppState } from '../../../../redux/reducers/root.reducer';
import { Dice } from '../../../../utils/rollDie';

export const TestStatContainer: FC<CharacterActionProps> = ({
    text,
    effectDie,
    statistic,
    showOnlyDie = false,
}) => {
    const actionModalDispatch = useDispatch<Dispatch<ActionModalActions>>();
    const stats = useSelector((state: AppState) => state.stats);
    const { test } = useTest();
    const handleAbility = () => {
        const modifier = getModifier(stats[statistic]);
        const { text, header, rollResult } = test(statistic, modifier);
        actionModalDispatch({
            type: 'SHOW_ACTION_MODAL',
            payload: {
                header: header,
                text,
                type: 'test',
                rollResult,
                statistic: statistic,
                burn: true,
            },
        });
    };
    return (
        <CharacterActionComponent
            effectDie={effectDie ?? Dice.d20}
            text={text}
            useAbility={handleAbility}
            diceOnly={showOnlyDie}
        />
    );
};
