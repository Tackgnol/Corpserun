import { Modifier, Modifiers } from '../../models';

export interface SetPassiveModifiers {
    readonly type: 'SET_PASSIVE_MODIFIERS';
    payload: Modifiers;
}

export interface AddCustomModifier {
    readonly type: 'ADD_CUSTOM_MODIFIER';
    payload: Modifier;
}

export interface RemoveCustomModifier {
    readonly type: 'REMOVE_CUSTOM_MODIFIER';
    payload: number;
}

export type ModifiersActions =
    | SetPassiveModifiers
    | AddCustomModifier
    | RemoveCustomModifier;
