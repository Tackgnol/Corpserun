import { ActionModalComponent } from './ActionModal';
import { useDispatch, useSelector } from 'react-redux';
import { AppState } from '../../../redux/reducers/root.reducer';
import { Dispatch } from 'redux';
import { ActionModalActions } from '../../../redux/actions/actionModal.actions';
import { GuideModal } from './GuideModal';

export const ActionModal = () => {
    const { show, type, text, header, statistic, rollResult } = useSelector(
        (state: AppState) => state.actionModal
    );
    const { diceMode } = useSelector((state: AppState) => state.settings);
    const actionModalDispatch = useDispatch<Dispatch<ActionModalActions>>();
    const handleClose = () => {
        actionModalDispatch({ type: 'HIDE_ACTION_MODAL' });
    };
    return diceMode === 'Description' ? (
        <GuideModal
            show={show}
            header={header}
            type={type}
            statistic={statistic}
            handleClose={handleClose}
            text={text}
        />
    ) : (
        <ActionModalComponent
            show={show}
            header={header}
            rollResult={rollResult}
            type={type}
            statistic={statistic}
            handleClose={handleClose}
            text={text}
        />
    );
};
