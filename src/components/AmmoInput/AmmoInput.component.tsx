import React, { ChangeEvent, FC } from 'react';
import change from '../../assets/MoreLess.png';
import './AmmoInput.css';

interface AmmoInputComponentProps {
    amount: number;
    onChange: (e: ChangeEvent<HTMLInputElement>) => void;
    onAdd: () => void;
    onSubtract: () => void;
}

export const AmmoInputComponent: FC<AmmoInputComponentProps> = ({
    amount,
    onChange,
    onAdd,
    onSubtract,
}) => {
    return (
        <>
            <div className="row ammo-container">
                <div className="row ammo-header">
                    <div className="col-3">Ammo:</div>
                </div>
                <div className="row ammo-main">
                    <div className="col-2" onClick={onAdd}>
                        <img className=" ammo-more" src={change} alt="+" />
                    </div>
                    <div className="col-2 ammo-value">{amount}</div>
                    <div className="col-2" onClick={onSubtract}>
                        <img
                            className="reverse ammo-less"
                            src={change}
                            alt="+"
                        />
                    </div>
                </div>
            </div>
            <div className="item-modal-separator">&nbsp;</div>
        </>
    );
};
