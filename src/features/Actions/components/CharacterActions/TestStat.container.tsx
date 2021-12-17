import { CharacterActionComponent } from './CharacterAction.component';
import { testStat } from '../../utils';
import { CharacterActionProps, ModalType } from '../../../../models';
import { FC } from 'react';
import { useDispatch } from 'react-redux';
import { Dispatch } from 'redux';
import { ActionModalActions } from '../../../../redux/actions/actionModal.actions';

export const TestStatContainer: FC<CharacterActionProps> = ({
    text,
    dice,
    modifier,
}) => {
    const actionModalDispatch = useDispatch<Dispatch<ActionModalActions>>();
    const handleAbility = () => {
        const { testResult, testHeader } = testStat(modifier);
        actionModalDispatch({
            type: 'SHOW_ACTION_MODAL',
            payload: {
                header: testHeader,
                text: testResult,
                type: ModalType.stat,
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
