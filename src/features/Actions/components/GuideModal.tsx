import React, { FC } from 'react';
import { ActionType, BaseStats, DieEffects } from '../../../models';
import { ModalTemplate } from '../../../components/Modal/Modal';
import { Modifiers } from '../../../components/Modifiers/Modifiers.container';

interface GuideModalProps {
    show: boolean;
    header: string;
    text: string;
    type: ActionType;
    statistic: keyof BaseStats;
    effects?: DieEffects;
    handleClose: () => void;
}

export const GuideModal: FC<GuideModalProps> = ({
    show,
    header,
    text,
    type,
    statistic,
    effects,
    handleClose,
}) => {
    const effectDivs = effects
        ? Object.entries(effects).map(([key, value]) => (
              <div className="row">
                  <div className="col-3">{key}</div>
                  <div className="col-8">{value.text}</div>
              </div>
          ))
        : null;

    return (
        <ModalTemplate show={show} onClose={handleClose} type={type}>
            <div className="d-flex action-modal item-info-container text-center">
                <span className="item-modal-name text-center w-100">
                    {header}
                </span>
                <span className="item-modal-description__big">{text}</span>
                <Modifiers action={type} stat={statistic} />
                <div className="item-modal-separator">&nbsp;</div>
                <div className="item-modal-description__big ">
                    {effects ? 'Use these effects' : null}
                    {effectDivs}
                </div>
            </div>
        </ModalTemplate>
    );
};
