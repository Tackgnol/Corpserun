import { Middleware } from 'redux';
import { RootState } from '../store/store';
import { BaseStats, Modifier } from '../../models';
import { getModifier } from '../../utils/modifiers';

interface Modifiers {
    primary: Modifier[] | undefined;
    secondary: Modifier[] | undefined;
    abilities: Modifier[] | undefined;
    armor: Modifier[] | undefined;
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
        const statValues = state.stats;
        const stats: (keyof BaseStats)[] = [
            'strength',
            'agility',
            'presence',
            'toughness',
        ];
        const modifierList: Modifier[] = [];
        const { primary, secondary, abilities, armor, load } =
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
        if (load) {
            modifierList.push(...load);
        }

        const statModifiers = stats.map((s) => {
            return {
                statistic: s,
                source: 'Statistic modifier',
                value: getModifier(statValues[s]),
                cancelable: false,
            };
        });
        if (
            action.type !== 'SET_PASSIVE_MODIFIERS' &&
            state.modifiers.length !== modifierList.length
        ) {
            storeApi.dispatch({
                type: 'SET_PASSIVE_MODIFIERS',
                payload: [...modifierList, ...statModifiers],
            });
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
        load: currLoad > maxLoad ? [hamperAgility, hamperStrength] : undefined,
    };
};
