import { FC } from 'react';
import Modal from 'react-modal';
import './Modal.css';

interface ModalProps {
    show: boolean;
    onClose: () => void;
}

export const ModalTemplate: FC<ModalProps> = ({ show, onClose, children }) => {
    return (
        <Modal
            shouldCloseOnOverlayClick={true}
            isOpen={show}
            className="modal-background"
            onRequestClose={onClose}
            overlayClassName="dark-overlay"
        >
            <div className="modal-inner">{children}</div>
        </Modal>
    );
};
