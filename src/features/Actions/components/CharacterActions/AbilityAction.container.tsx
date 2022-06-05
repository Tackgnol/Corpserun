import { FC } from 'react';
import {
    CharacterActionProps,
    DieEffects,
    Equipment,
} from '../../../../models';
import { CharacterActionComponent } from './CharacterAction.component';
import { Dice } from '../../../../utils/rollDie';
import { useDispatch } from 'react-redux';
import { Dispatch } from 'redux';
import { ActionModalActions } from '../../../../redux/actions/actionModal.actions';
import { useAbility } from '../../../../utils/hooks/useAbility';
import { EquipmentActions } from '../../../../redux/actions/equipment.actions';
import { findItem } from '../../../../classes/utils';
import { StatusActions } from '../../../../redux/actions/status.actions';

interface AbilityActionProps extends CharacterActionProps {
    successDie?: Dice;
    successDifficulty?: number;
    effects: DieEffects;
}

export const AbilityAction: FC<AbilityActionProps> = ({
    successDie,
    successDifficulty,
    effects,
    effectDie,
    text,
    modifier,
    statistic,
}) => {
    const actionModalDispatch = useDispatch<Dispatch<ActionModalActions>>();
    const equipmentDispatch = useDispatch<Dispatch<EquipmentActions>>();
    const statusDispatch = useDispatch<Dispatch<StatusActions>>();
    const { ability } = useAbility();
    const handleAbility = () => {
        const { header, text, applyModifiers, gainItem, rollResult } = ability(
            effectDie ?? Dice.d20,
            effects,
            successDie,
            successDifficulty,
            statistic,
            modifier
        );
        if (gainItem) {
            const item = findItem(gainItem);
            let items: Equipment[] = [item];
            if (typeof item.multiple === 'number') {
                items = Array(item.multiple).fill(item);
            }
            items.forEach((i) => {
                equipmentDispatch({
                    type: 'GAIN_ITEM',
                    payload: i,
                });
            });
        }
        if (applyModifiers && applyModifiers.length > 0) {
            applyModifiers.forEach((s) => {
                statusDispatch({ type: 'ADD_STATUS', payload: s });
            });
        }
        actionModalDispatch({
            type: 'SHOW_ACTION_MODAL',
            payload: {
                header: header,
                text: text,
                type: 'ability',
                rollResult,
                statistic,
                burn: true,
            },
        });
    };

    return (
        <CharacterActionComponent
            effectDie={effectDie ?? Dice.d20}
            text={text}
            useAbility={handleAbility}
        />
    );
};
