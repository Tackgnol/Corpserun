import { Middleware } from 'redux';
import { RootState } from '../store/store';
import { Modifier, Status } from '../../models';

interface Modifiers {
    primary: Modifier[] | undefined;
    secondary: Modifier[] | undefined;
    abilities: Modifier[] | undefined;
    armor: Modifier[] | undefined;
    status: Modifier[] | undefined;
    load: Modifier[] | undefined;
}

const hamperStrength: Modifier = {
    statistic: 'strength',
    source: 'Over encumbered',
    value: -2,
};

const hamperAgility: Modifier = {
    statistic: 'agility',
    source: 'Over encumbered',
    value: -2,
};

export const modifierMiddleware: Middleware =
    (storeApi) => (next) => (action) => {
        const state = storeApi.getState();
        const modifierList: Modifier[] = [];
        const { primary, secondary, abilities, armor, status, load } =
            extractModifiers(state);
        if (primary) {
            modifierList.push(...primary);
        }
        if (secondary) {
            modifierList.push(...secondary);
        }
        if (abilities) {
            modifierList.push(...abilities);
        }
        if (armor) {
            modifierList.push(...armor);
        }
        if (status) {
            modifierList.push(...status);
        }
        if (load) {
            modifierList.push(...load);
        }
        if (
            action.type !== 'SET_MODIFIERS' &&
            state.modifiers.length !== modifierList.length
        ) {
            storeApi.dispatch({ type: 'SET_MODIFIERS', payload: modifierList });
        }
        return next(action);
    };

const extractModifiers = (state: RootState): Modifiers => {
    const {
        equipment: { currLoad },
        stats: { maxLoad },
    } = state;

    return {
        primary: state.equipment.primaryWeapon?.modifiers,
        secondary: state.equipment.secondaryWeapon?.modifiers,
        abilities: state.info.abilities.map((a) => a.modifiers ?? []).flat(),
        armor: state.equipment?.armor?.modifiers,
        status: (state.status as Status[])
            .filter((s) => s.last > 0 || s.last === 'unlimited')
            .map((s) => s.modifiers ?? [])
            .flat(),
        load: currLoad > maxLoad ? [hamperAgility, hamperStrength] : undefined,
    };
};