import { CharacterAction, ModalType } from '../../../models';
import { AttackActionContainer } from './CharacterActions/AttackAction.container';
import { DefendActionContainer } from './CharacterActions/DefendAction.container';
import { SpellActionContainer } from './CharacterActions/SpellAction.container';
import { TestStatContainer } from './CharacterActions/TestStat.container';
import { FC } from 'react';

interface ActionListProps {
    actions: CharacterAction[];
}

export const ActionList: FC<ActionListProps> = ({ actions }) => {
    return (
        <>
            {actions.map((a) => {
                switch (a.type) {
                    case ModalType.attack:
                        if (a.weaponType) {
                            return (
                                <AttackActionContainer
                                    weaponType={a.weaponType}
                                    text={a.text}
                                    dice={a.dice}
                                />
                            );
                        }
                        return null;
                    case ModalType.defend:
                        return (
                            <DefendActionContainer
                                text={a.text}
                                dice={a.dice}
                            />
                        );
                    case ModalType.cast:
                        const spellText = a.spellText ?? 'You cast your spell!';
                        return (
                            <SpellActionContainer
                                spellText={spellText}
                                text={a.text}
                                dice={a.dice}
                            />
                        );
                    case ModalType.stat:
                        return (
                            <TestStatContainer text={a.text} dice={a.dice} />
                        );
                    default:
                        return null;
                }
            })}
        </>
    );
};
