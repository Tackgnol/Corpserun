import { FC } from 'react';
import { Weapon } from '../../../../models';

interface OffhandComponentProps {
    equiped: Weapon | null;
    onClick: () => void;
}

export const OffhandComponent: FC<OffhandComponentProps> = ({
    equiped,
    onClick,
}) => (
    <div className="offhand-background" onClick={onClick}>
        <div className="offhand-header white-outline text-end">Offhand</div>

        <div className="offhand-text white-outline text-end ">
            {equiped?.name}
        </div>
    </div>
);
