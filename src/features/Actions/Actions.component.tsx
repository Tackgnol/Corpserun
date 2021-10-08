import { FC } from 'react';
import { Header } from './components/Header';
import {
    CharacterAction,
    CharacterActionProps,
} from './components/CharacterActions/CharacterAction.container';

interface ActionsComponentProps {
    actions: CharacterActionProps[];
}

export const ActionsComponent: FC<ActionsComponentProps> = ({ actions }) => {
    return (
        <div className="actions-background">
            <Header />
            {actions.map((a) => (
                <CharacterAction dice={a.dice} text={a.text} type={a.type} />
            ))}
        </div>
    );
};
