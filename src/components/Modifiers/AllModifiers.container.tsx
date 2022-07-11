import { useSelector } from 'react-redux';
import { AppState } from '../../redux/reducers/root.reducer';
import { ModifiersComponent } from './Modifiers.component';
import { Modifier } from '../../models';
import './modifiers.css';

export const AllModifiers = () => {
    const { buffs, passive } = useSelector(
        (state: AppState) => state.modifiers
    );

    const handleRemove = (modifier: Modifier) => {
        console.log('remove!');
    };
    return (
        <>
            <span className="modifiers-header yellow-outline">
                Stats/Items/Aflictions
            </span>
            <ModifiersComponent
                onClose={handleRemove}
                modifiers={passive.filter((m) => m.value !== 0)}
                details={true}
            />
            <span className="modifiers-header yellow-outline">
                Buffs / Debuffs
            </span>
            <ModifiersComponent
                onClose={handleRemove}
                modifiers={[...buffs].filter((m) => m.value !== 0)}
                details={true}
            />
        </>
    );
};
