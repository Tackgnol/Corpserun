import { FC } from 'react';
import { Header } from './components/Header';
import { ActionModal } from './components/ActionModal';
import { CharacterAction, ModalType } from '../../models';
import { ActionList } from './components/ActionList.component';

interface ActionsComponentProps {
    actions: CharacterAction[];
    showModal: boolean;
    closeModal: () => void;
    header: string;
    type: ModalType;
    text?: string;
}

export const ActionsComponent: FC<ActionsComponentProps> = ({
    actions,
    showModal,
    header,
    closeModal,
    type,
    text,
}) => {
    return (
        <div className="actions-background">
            <Header />
            <ActionList actions={actions} />
            <ActionModal
                show={showModal}
                header={header}
                text={text}
                handleClose={closeModal}
                type={type}
            />
        </div>
    );
};
