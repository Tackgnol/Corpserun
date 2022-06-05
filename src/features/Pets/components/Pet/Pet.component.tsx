import { FC } from 'react';

import './Pet.css';
import kill from '../../../../assets/Pets/kill.png';
import use from '../../../../assets/Pets/use.png';
import heal from '../../../../assets/Pets/heal.png';
import damage from '../../../../assets/Pets/damage.png';
import buff from '../../../../assets/Pets/buff.png';
import { ActionType } from '../../../../models';

interface PetComponentProps {
    name: string;
    description: string;
    hp: number;
    onKill: () => void;
    onHeal: () => void;
    onDamage: () => void;
    onUse: () => void;
    type: ActionType;
}

export const PetComponent: FC<PetComponentProps> = ({
    name,
    description,
    hp,
    onHeal,
    onDamage,
    onKill,
    onUse,
    type,
}) => {
    return (
        <div className="pet-background">
            <div className="pet-content">
                <div className="pet-header">
                    <div className="pet-name">{name}</div>
                    <div className="pet-kill" onClick={onKill}>
                        <img src={kill} className="pet-icon" alt="Kill pet" />
                    </div>
                </div>
                <div className="pet-description">{description}</div>
                <div className="pet-footer">
                    <div className="pet-use" onClick={onUse}>
                        <img
                            src={type === 'buff' ? buff : use}
                            className="pet-icon"
                            alt="use pet"
                        />
                    </div>
                    <div className="pet-health">
                        <div className="pet-damage" onClick={onDamage}>
                            <img
                                src={damage}
                                className="pet-icon"
                                alt="damage pet"
                            />
                        </div>
                        <div className="pet-hp">HP:{hp}</div>
                        <div className="pet-heal" onClick={onHeal}>
                            <img
                                src={heal}
                                className="pet-icon"
                                alt="heal pet"
                            />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};
