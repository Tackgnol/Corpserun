import { Stats } from '../../models';

export interface SetStat {
    readonly type: 'SET_STAT';
    payload: { [name in keyof Stats]: number };
}

export type StatActions = SetStat;
