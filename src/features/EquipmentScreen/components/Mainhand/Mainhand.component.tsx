import { FC } from 'react';
import { Weapon } from '../../../../models';

interface MainhandComponentProps {
    equiped: Weapon | null;
    ammo?: number;
    onClick: () => void;
}

export const MainhandComponent: FC<MainhandComponentProps> = ({
    equiped,
    ammo,
    onClick,
}) => (
    <div className="mainhand-background" onClick={onClick}>
        <div className="mainhand-header white-outline">Mainhand</div>
        <div className="mainhand-text white-outline">
            {equiped?.name}
            {ammo ? `- ammo: ${ammo}` : null}
        </div>
    </div>
);
