import { FC } from 'react';
import { useSelector } from 'react-redux';
import { AppState } from '../../redux/reducers/root.reducer';
import { ActionType, BaseStats } from '../../models';
import { ModifiersComponent } from './Modifiers.component';
import { getModifier } from '../../utils/modifiers';

interface IModifiersProps {
    action: ActionType;
    stat: keyof BaseStats;
}

export const Modifiers: FC<IModifiersProps> = ({ action, stat }) => {
    let allModifiers = useSelector((state: AppState) => state.modifiers);
    const stats = useSelector((state: AppState) => state.stats);
    if (stat) {
        allModifiers = allModifiers.filter((m) => m.statistic === stat);
    }
    if (action) {
        allModifiers = allModifiers.filter((m) => !m.exclude?.includes(action));
    }
    const statModifier = getModifier(stats[stat]);
    if (statModifier) {
        allModifiers.push({
            statistic: stat,
            source: 'Statistic modifier',
            value: statModifier,
            cancelable: false,
        });
    }
    return <ModifiersComponent modifiers={allModifiers} />;
};
