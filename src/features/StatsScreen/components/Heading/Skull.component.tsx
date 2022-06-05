import React, { FC } from 'react';
import './Skull.css';
import { useDispatch } from 'react-redux';
import { Dispatch } from 'redux';
import { HPActions } from '../../../../redux/actions/hp.actions';

interface SkullComponentProps {
    maxHP: number;
    currHP: number;
}

export const SkullComponent: FC<SkullComponentProps> = ({ maxHP, currHP }) => {
    const hpDispatch = useDispatch<Dispatch<HPActions>>();

    const takeDMG = () => {
        hpDispatch({ type: 'TAKE_DAMAGE' });
    };
    const healDMG = () => {
        hpDispatch({ type: 'HEAL_DAMAGE' });
    };
    return (
        <div
            className={`container skull-container ${
                currHP === -1 ? 'red' : ''
            }`}
            style={{
                filter: currHP === -1 ? '' : `grayscale(${1 - currHP / maxHP})`,
            }}
        >
            <div className="row hp-container">
                <div
                    className="col-3 offset-0 col-md-1 offset-md-3 offset-lg-4 plus"
                    onClick={healDMG}
                />
                <div className="col-3 offset-md-1 offset-lg-0 col-md-1">
                    <div className="skull-hp yellow-outline left-eye">
                        {currHP}
                    </div>
                </div>
                <div className="col-3 col-md-1">
                    <div className="skull-hp yellow-outline right-eye">
                        {maxHP}
                    </div>
                </div>
                <div
                    className="col-3 offset-md-1 offset-lg-0 minus"
                    onClick={takeDMG}
                />
            </div>
        </div>
    );
};
