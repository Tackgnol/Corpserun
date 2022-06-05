import { Modifiers } from '../../models';
import { FC } from 'react';
import { ModifierComponent } from './Modifier/Modifier.component';

interface ModifiersComponentProps {
    modifiers: Modifiers;
}

export const ModifiersComponent: FC<ModifiersComponentProps> = ({
    modifiers,
}) => {
    return (
        <>
            {modifiers.map((m) => (
                <ModifierComponent modifier={m} />
            ))}
        </>
    );
};
