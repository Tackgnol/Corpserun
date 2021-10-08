import { FC } from 'react';
import { Armor } from '../../../../models';

interface ArmorComponentProps {
    equiped: Armor | null;
    onClick: () => void;
}

export const ArmorComponent: FC<ArmorComponentProps> = ({
    equiped,
    onClick,
}) => (
    <div className="armor-background" onClick={onClick}>
        <div className="armor-header white-outline text-end">Armor</div>
        <div className="armor-text white-outline text-end">{equiped?.name}</div>
    </div>
);
