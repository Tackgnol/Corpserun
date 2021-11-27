import { FC } from 'react';
import Modal from 'react-modal';
import './Modal.css';
import { ModalType } from '../../models';

interface ModalProps {
    show: boolean;
    type?: ModalType;
    onClose: () => void;
}

export const ModalTemplate: FC<ModalProps> = ({
    show,
    onClose,
    children,
    type,
}) => {
    let background: string;
    switch (type) {
        case ModalType.attack:
            background = 'modal-attack';
            break;
        case ModalType.stat:
            background = 'modal-stat';
            break;
        case ModalType.item:
        default:
            background = 'modal-item';
    }
    return (
        <Modal
            shouldCloseOnOverlayClick={true}
            isOpen={show}
            className={`modal-background ${background}`}
            onRequestClose={onClose}
            overlayClassName="dark-overlay"
            appElement={document.getElementById('root') ?? undefined}
        >
            <div className="modal-inner">{children}</div>
        </Modal>
    );
};
