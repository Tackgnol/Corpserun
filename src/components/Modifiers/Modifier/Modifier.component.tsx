import { Modifier } from '../../../models';
import { FC } from 'react';

import './Modifier.css';
import { Upgrade } from './Upgrade.component';
import { Downgrade } from './Downgrade.component';
import { Close } from '../../CloseButton/Close.component';

interface ModifierComponentProps {
    modifier: Modifier;
    onClose?: (modifier: Modifier) => void;
    details: boolean;
}

export const ModifierComponent: FC<ModifierComponentProps> = ({
    modifier,
    onClose = () => {},
    details,
}) => {
    const { value, source, statistic, cancelable } = modifier;
    const handleClick = () => {
        onClose(modifier);
    };
    const close =
        details && cancelable ? (
            <div className="col-1">
                <Close onClick={handleClick} />
            </div>
        ) : null;
    const stat = details ? (
        <div className="modifier-stat position-absolute">
            <span className="modifier-stat__text">
                {statistic.substr(0, 3)}
            </span>
        </div>
    ) : null;
    return (
        <div className="row modifier-background position-relative">
            {stat}
            <div className="modifier-contents">
                <div className="col-1">
                    {value > 0 ? <Upgrade /> : <Downgrade />}
                </div>
                <div className="col-7">{source}</div>
                <div className="col-1">
                    {value > 0 ? `+${value}` : `${value}`}
                </div>
                {close}
            </div>
        </div>
    );
};
