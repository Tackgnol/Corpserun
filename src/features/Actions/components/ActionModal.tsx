import { ModalTemplate } from '../../../components/Modal/Modal';
import { FC } from 'react';

interface ActionModalProps {
    show: boolean;
    header: string;
    damageText?: string;
    handleClose: () => void;
}

export const ActionModal: FC<ActionModalProps> = ({
    show,
    header,
    damageText,
    handleClose,
}) => {
    return (
        <ModalTemplate show={show} onClose={handleClose} type="attack">
            <div className="d-flex action-modal item-info-container text-center">
                <span className="item-modal-name text-center w-100">
                    {header}
                </span>
                <span className="item-modal-description__big">
                    {damageText}
                </span>
            </div>
        </ModalTemplate>
    );
};
