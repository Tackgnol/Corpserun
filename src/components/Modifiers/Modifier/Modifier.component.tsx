import { Modifier } from '../../../models';
import { FC } from 'react';

import './Modifier.css';
import { Upgrade } from './Upgrade.component';
import { Downgrade } from './Downgrade.component';

interface ModifierComponentProps {
    modifier: Modifier;
}

export const ModifierComponent: FC<ModifierComponentProps> = ({ modifier }) => {
    const { value, source } = modifier;
    return (
        <div className="row modifier-background">
            <div className="modifier-contents">
                <div className="col-1">
                    {value > 0 ? <Upgrade /> : <Downgrade />}
                </div>
                <div className="col-7">{source}</div>
                <div className="col-1">
                    {value > 0 ? `+${value}` : `${value}`}
                </div>
            </div>
        </div>
    );
};
