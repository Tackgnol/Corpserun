import { ActionType, BaseStats, Status } from '../../models';

interface AddStatus {
    readonly type: 'ADD_STATUS';
    payload: Status;
}

interface RemoveStatus {
    readonly type: 'REMOVE_STATUS';
    payload: string;
}

interface ClearStatus {
    readonly type: 'CLEAR_STATUS';
}

interface UseCharge {
    readonly type: 'USE_STATUS';
    payload: { statistic?: keyof BaseStats; type: ActionType };
}

export type StatusActions = AddStatus | RemoveStatus | ClearStatus | UseCharge;
