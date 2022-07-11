import { ActionType, BaseStats, Modifier, Modifiers } from '../../models';
import { useSelector } from 'react-redux';
import { AppState } from '../../redux/reducers/root.reducer';

interface UseModifiers {
    modifiers: Modifiers;
    calculateAction: (action: ActionType) => number;
    calculateStatTest: (value: number, statistic: keyof BaseStats) => number;
    calculateAbility: (value: number, statistic?: keyof BaseStats) => number;
}

export const useModifiers = (): UseModifiers => {
    const { passive, buffs } = useSelector(
        (state: AppState) => state.modifiers
    );
    const modifiers = [...passive, ...buffs];
    const calculateAction = (action: ActionType): number => {
        let filteredModifiers: Modifiers = [];
        switch (action) {
            case 'defence':
                filteredModifiers = filterStatAndAction(
                    modifiers,
                    'agility',
                    'defence'
                );
                break;
            case 'melee':
                filteredModifiers = filterStatAndAction(
                    modifiers,
                    'strength',
                    'melee'
                );
                break;
            case 'ranged':
                filteredModifiers = filterStatAndAction(
                    modifiers,
                    'presence',
                    'ranged'
                );
                break;
            case 'cast':
                filteredModifiers = filterStatAndAction(
                    modifiers,
                    'presence',
                    'cast'
                );
                break;
        }
        return modifiersToValue(filteredModifiers);
    };
    const calculateStatTest = (
        value: number,
        statistic: keyof BaseStats
    ): number => {
        const filteredModifiers = filterStatAndAction(
            modifiers,
            statistic,
            'test'
        );
        return modifiersToValue(filteredModifiers);
    };
    const calculateAbility = (
        value: number,
        statistic: keyof BaseStats = 'presence'
    ): number => {
        const filteredModifiers = filterStatAndAction(
            modifiers,
            statistic,
            'ability'
        );
        return modifiersToValue(filteredModifiers);
    };

    return {
        modifiers,
        calculateAction,
        calculateStatTest,
        calculateAbility,
    };
};

const modifiersToValue = (modifiers: Modifiers): number => {
    return modifiers.reduce((acc: number, modifier: Modifier) => {
        return acc + modifier.value;
    }, 0);
};

const filterStatAndAction = (
    modifiers: Modifiers,
    stat: keyof BaseStats,
    action: ActionType
) => {
    return modifiers
        .filter((m) => !m.exclude?.includes(action))
        .filter((m) => m.statistic === stat);
};
