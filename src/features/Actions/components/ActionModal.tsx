import { ModalTemplate } from '../../../components/Modal/Modal';
import React, { FC } from 'react';
import { ActionType, BaseStats } from '../../../models';
import { Modifiers } from '../../../components/Modifiers/Modifiers.container';

interface ActionModalProps {
    show: boolean;
    header: string;
    text?: string;
    rollResult?: string;
    type: ActionType;
    statistic: keyof BaseStats;
    handleClose: () => void;
}

export const ActionModalComponent: FC<ActionModalProps> = ({
    show,
    header,
    text,
    rollResult,
    type,
    statistic,
    handleClose,
}) => {
    return (
        <ModalTemplate show={show} onClose={handleClose} type={type}>
            <div className="d-flex action-modal item-info-container text-center">
                <span className="item-modal-name text-center w-100">
                    {header}
                </span>
                <span className="item-modal-description__big">{text}</span>
                <Modifiers action={type} stat={statistic} />
                <div className="item-modal-separator">&nbsp;</div>
                <span className="item-modal-description__big ">
                    {rollResult}
                </span>
            </div>
        </ModalTemplate>
    );
};
