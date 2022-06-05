import { FC } from 'react';
import { Header } from './components/Header';
import { ActionModal } from './components/ActionModal.container';
import { CharacterAction } from '../../models';
import { ActionList } from './components/ActionList.component';

interface ActionsComponentProps {
    actions: CharacterAction[];
}

export const ActionsComponent: FC<ActionsComponentProps> = ({ actions }) => {
    return (
        <div className="actions-background">
            <Header />
            <ActionList actions={actions} />
            <ActionModal />
        </div>
    );
};
