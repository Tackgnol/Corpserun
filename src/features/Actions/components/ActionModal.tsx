import { ModalTemplate } from '../../../components/Modal/Modal';
import { FC } from 'react';
import { ModalType } from '../../../models';

interface ActionModalProps {
    show: boolean;
    header: string;
    text?: string;
    type: ModalType;
    handleClose: () => void;
}

export const ActionModal: FC<ActionModalProps> = ({
    show,
    header,
    text,
    type,
    handleClose,
}) => {
    return (
        <ModalTemplate show={show} onClose={handleClose} type={type}>
            <div className="d-flex action-modal item-info-container text-center">
                <span className="item-modal-name text-center w-100">
                    {header}
                </span>
                <span className="item-modal-description__big">{text}</span>
            </div>
        </ModalTemplate>
    );
};
