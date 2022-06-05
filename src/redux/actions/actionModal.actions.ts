import { ActionType, BaseStats } from '../../models';

export interface ShowModal {
    readonly type: 'SHOW_ACTION_MODAL';
    payload: {
        header: string;
        text?: string;
        rollResult?: string;
        type: ActionType;
        statistic?: keyof BaseStats;
        burn?: boolean;
    };
}

export interface HideModal {
    readonly type: 'HIDE_ACTION_MODAL';
}

export type ActionModalActions = ShowModal | HideModal;
