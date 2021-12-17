import { FC } from 'react';
import { Header } from './components/Header';
import {
    CharacterAction,
    CharacterActionProps,
} from './components/CharacterActions/CharacterAction.container';
import { ActionModal } from './components/ActionModal';
import { ModalType } from '../../models';

interface ActionsComponentProps {
    actions: CharacterActionProps[];
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
            {actions.map((a) => (
                <CharacterAction
                    dice={a.dice}
                    text={a.text}
                    type={a.type}
                    key={a.text}
                    modifier={a.modifier}
                    additionalData={a.additionalData}
                    uses={a.uses}
                />
            ))}
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
