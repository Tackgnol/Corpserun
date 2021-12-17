import { FC } from 'react';
import { Weapon } from '../../../../models';

interface MainhandComponentProps {
    equiped: Weapon | null;
    onClick: () => void;
}

export const MainhandComponent: FC<MainhandComponentProps> = ({
    equiped,
    onClick,
}) => (
    <div className="mainhand-background" onClick={onClick}>
        <div className="mainhand-header white-outline">Mainhand</div>
        <div className="mainhand-text white-outline">
            {equiped?.name}
            {equiped?.amount ? `- ammo: ${equiped.amount.curr}` : null}
        </div>
    </div>
);
