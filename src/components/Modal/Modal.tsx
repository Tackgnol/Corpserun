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
        case 'ranged':
        case 'melee':
            background = 'modal-attack';
            break;
        case 'defence':
            background = 'modal-attack';
            break;
        case 'test':
        case 'ability':
            background = 'modal-stat';
            break;
        case 'cast':
            background = 'modal-cast';
            break;
        default:
            background = 'modal-item';
    }
    return (
        <Modal
            shouldCloseOnOverlayClick={true}
            isOpen={show}
            className={`modal-background`}
            onRequestClose={onClose}
            overlayClassName="dark-overlay"
            appElement={document.getElementById('root') ?? undefined}
        >
            <div className={`modal-header ${background}`}></div>
            <div className="modal-inner">
                {children}
                <Close onClick={onClose} className="modal__close" />
            </div>
        </Modal>
    );
};
