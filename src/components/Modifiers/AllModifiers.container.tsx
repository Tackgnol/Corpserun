import { useSelector } from 'react-redux';
import { AppState } from '../../redux/reducers/root.reducer';
import { ModifiersComponent } from './Modifiers.component';
import { BaseStats, Modifier } from '../../models';
import { getModifier } from '../../utils/modifiers';

export const AllModifiers = () => {
    const allModifiers = useSelector((state: AppState) => state.modifiers);
    const statValues = useSelector((state: AppState) => state.stats);
    const stats: (keyof BaseStats)[] = [
        'strength',
        'agility',
        'presence',
        'toughness',
    ];
    const statModifiers = stats.map((s) => {
        return {
            statistic: s,
            source: 'Statistic modifier',
            value: getModifier(statValues[s]),
            cancelable: false,
        };
    });
    const handleRemove = (modifier: Modifier) => {
        console.log('remove!');
    };
    return (
        <ModifiersComponent
            onClose={handleRemove}
            modifiers={[...allModifiers, ...statModifiers].filter(
                (m) => m.value !== 0
            )}
            details={true}
        />
    );
};
