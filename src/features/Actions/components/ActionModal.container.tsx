import { ActionModalComponent } from './ActionModal';
import { useDispatch, useSelector } from 'react-redux';
import { AppState } from '../../../redux/reducers/root.reducer';
import { Dispatch } from 'redux';
import { ActionModalActions } from '../../../redux/actions/actionModal.actions';
import { useStatus } from '../../../utils/hooks/useStatus';

export const ActionModal = () => {
    const { show, type, text, header, statistic, rollResult, burn } =
        useSelector((state: AppState) => state.actionModal);
    const { burnStatus } = useStatus();
    const actionModalDispatch = useDispatch<Dispatch<ActionModalActions>>();

    const handleClose = () => {
        actionModalDispatch({ type: 'HIDE_ACTION_MODAL' });
        if (burn) {
            burnStatus(type, statistic);
        }
    };
    return (
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
