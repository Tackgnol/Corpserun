import React, { FC } from 'react';
import './Skull.css';

interface SkullComponentProps {
    maxHP: number;
    currHP: number;
}

export const SkullComponent: FC<SkullComponentProps> = ({ maxHP, currHP }) => {
    return (
        <div className="skull-container">
            <div className="h-100">
                <div className="row h-100 justify-content-md-center align-content-center">
                    <div className="col col-sm-5 col-md-5">
                        <div className="skull-hp yellow-outline left-eye">
                            {currHP}
                        </div>
                    </div>
                    <div className="col col-sm-5 offset-md-1  col-md-5">
                        <div className="skull-hp yellow-outline right-eye">
                            {maxHP}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};
