import { FC } from 'react';
import { Header } from './components/Header';
import {
    CharacterAction,
    CharacterActionProps,
} from './components/CharacterActions/CharacterAction.container';
import { ActionModal } from './components/ActionModal';

interface ActionsComponentProps {
    actions: CharacterActionProps[];
    showModal: boolean;
    closeModal: () => void;
    header: string;
    damageText?: string;
}

export const ActionsComponent: FC<ActionsComponentProps> = ({
    actions,
    showModal,
    header,
    closeModal,
    damageText,
}) => {
    return (
        <div className="actions-background">
            <Header />
            {actions.map((a) => (
                <CharacterAction dice={a.dice} text={a.text} type={a.type} />
            ))}
            <ActionModal
                show={showModal}
                header={header}
                damageText={damageText}
                handleClose={closeModal}
            />
        </div>
    );
};
