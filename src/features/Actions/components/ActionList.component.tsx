import { CharacterAction } from '../../../models';

import { AttackActionContainer } from './CharacterActions/AttackAction.container';
import { DefendActionContainer } from './CharacterActions/DefendAction.container';
import { SpellActionContainer } from './CharacterActions/SpellAction.container';
import { TestStatContainer } from './CharacterActions/TestStat.container';
import { FC } from 'react';
import { AbilityAction } from './CharacterActions/AbilityAction.container';
import { Dice } from '../../../utils/rollDie';

interface ActionListProps {
    actions: CharacterAction[];
}

export const ActionList: FC<ActionListProps> = ({ actions }) => {
    return (
        <>
            {actions.map((a) => {
                switch (a.type) {
                    case 'melee':
                    case 'ranged':
                        if (a.weaponType) {
                            return (
                                <AttackActionContainer
                                    key={a.text}
                                    weaponType={a.weaponType}
                                    text={a.text}
                                    effectDie={a.effectDie}
                                    effectModifier={a.effectModifier}
                                    damageDie={a.damageDie ?? [Dice.d4]}
                                    statistic={a.statistic}
                                    uses={a.uses}
                                    ammoType={a.ammoType}
                                    modifier={a.modifier}
                                />
                            );
                        }
                        return null;
                    case 'defence':
                        return (
                            <DefendActionContainer
                                key={a.text}
                                text={a.text}
                                effectDie={a.effectDie}
                                statistic={a.statistic}
                            />
                        );
                    case 'cast':
                        const spellText = a.spellText ?? 'You cast your spell!';
                        return (
                            <SpellActionContainer
                                key={a.text}
                                spellText={spellText}
                                text={a.text}
                                effectDie={a.effectDie}
                                statistic={a.statistic}
                            />
                        );
                    case 'test':
                        return (
                            <TestStatContainer
                                key={a.text}
                                text={a.text}
                                effectDie={a.effectDie}
                                statistic={a.statistic}
                            />
                        );
                    case 'ability':
                        const {
                            successDifficulty,
                            successDie,
                            effectDie,
                            effects,
                            text,
                        } = a;

                        return (
                            <AbilityAction
                                key={a.text}
                                successDie={successDie}
                                successDifficulty={successDifficulty}
                                effects={effects ?? {}}
                                text={text}
                                effectDie={effectDie}
                                statistic={a.statistic}
                            />
                        );
                    default:
                        return null;
                }
            })}
        </>
    );
};
