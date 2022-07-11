import { FC } from 'react';
import { useSelector } from 'react-redux';
import { AppState } from '../../redux/reducers/root.reducer';
import { ActionType, BaseStats } from '../../models';
import { ModifiersComponent } from './Modifiers.component';

interface IModifiersProps {
    action: ActionType;
    stat: keyof BaseStats;
}

export const Modifiers: FC<IModifiersProps> = ({ action, stat }) => {
    let { passive } = useSelector((state: AppState) => state.modifiers);
    if (stat) {
        passive = passive.filter((m) => m.statistic === stat);
    }
    if (action) {
        passive = passive.filter((m) => !m.exclude?.includes(action));
    }
    passive = passive.filter((m) => m.value !== 0);
    return <ModifiersComponent modifiers={passive} />;
};
