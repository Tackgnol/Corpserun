import { Modifiers } from '../../models';

export interface SetModifiers {
    readonly type: 'SET_MODIFIERS';
    payload: Modifiers;
}

export type ModifiersActions = SetModifiers;
