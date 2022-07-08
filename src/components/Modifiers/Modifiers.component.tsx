import { Modifier, Modifiers } from '../../models';
import { FC } from 'react';
import { ModifierComponent } from './Modifier/Modifier.component';

interface ModifiersComponentProps {
    modifiers: Modifiers;
    onClose?: (modifier: Modifier) => void;
    details?: boolean;
}

export const ModifiersComponent: FC<ModifiersComponentProps> = ({
    modifiers,
    details = false,
    onClose,
}) => {
    return (
        <>
            {modifiers.map((m) => (
                <ModifierComponent
                    onClose={onClose}
                    details={details}
                    modifier={m}
                />
            ))}
        </>
    );
};
