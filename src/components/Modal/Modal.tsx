import { FC } from 'react';
import Modal from 'react-modal';
import './Modal.css';

interface ModalProps {
    show: boolean;
    type?: 'item' | 'attack';
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
        case 'attack':
            background = 'modal-attack';
            break;
        case 'item':
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
        >
            <div className="modal-inner">{children}</div>
        </Modal>
    );
};
