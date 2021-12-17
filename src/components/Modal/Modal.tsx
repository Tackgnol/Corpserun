import { FC } from 'react';
import Modal from 'react-modal';
import './Modal.css';
import { ModalType } from '../../models';
import { Close } from '../CloseButton/Close.component';

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
        case ModalType.cast:
            background = 'modal-cast';
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
            <div className="modal-inner">
                {children}
                <Close onClick={onClose} className="modal__close" />
            </div>
        </Modal>
    );
};
