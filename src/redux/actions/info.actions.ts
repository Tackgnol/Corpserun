import { Ability } from '../../models';

export interface SetName {
    readonly type: 'SET_NAME';
    payload: string;
}

export interface SetDescription {
    readonly type: 'SET_DESCRIPTION';
    payload: string;
}

export interface SetAbilities {
    readonly type: 'SET_ABILITIES';
    payload: Ability[];
}

export interface EditAbilities {
    readonly type: 'EDIT_ABILITIES';
    payload: string;
}

export interface SetClassName {
    readonly type: 'SET_CLASS_NAME';
    payload: string;
}

export type InfoActions =
    | SetName
    | SetDescription
    | SetAbilities
    | SetClassName
    | EditAbilities;
