import { ActionType, BaseStats, Status } from '../../models';
import { useDispatch } from 'react-redux';
import { Dispatch } from 'redux';
import { StatusActions } from '../../redux/actions/status.actions';

interface StatusValues {
    header: string;
    text: string;
}

interface UseStatus {
    applyStatus: (status: Status) => StatusValues;
    burnStatus: (type: ActionType, statistic?: keyof BaseStats) => void;
}

export const useStatus = (): UseStatus => {
    const statusDispatch = useDispatch<Dispatch<StatusActions>>();

    const applyStatus = (status: Status) => {
        statusDispatch({ type: 'ADD_STATUS', payload: status });
        return { header: status.name, text: status.description };
    };

    const burnStatus = (type: ActionType, statistic?: keyof BaseStats) => {
        statusDispatch({ type: 'USE_STATUS', payload: { statistic, type } });
    };

    return { applyStatus, burnStatus };
};
