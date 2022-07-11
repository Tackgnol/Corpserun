import { CharacterActionComponent } from './CharacterAction.component';
import { CharacterActionProps } from '../../../../models';
import { FC } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Dispatch } from 'redux';
import { EquipmentActions } from '../../../../redux/actions/equipment.actions';
import { ActionModalActions } from '../../../../redux/actions/actionModal.actions';
import { AppState } from '../../../../redux/reducers/root.reducer';
import { useDefence } from '../../../../utils/hooks/useDefence';
import { Dice } from '../../../../utils/rollDie';

export const DefendActionContainer: FC<CharacterActionProps> = ({
    info,
    effectDie,
    modifier,
}) => {
    const { defend } = useDefence();
    const equipmentDispatch = useDispatch<Dispatch<EquipmentActions>>();
    const actionModalDispatch = useDispatch<Dispatch<ActionModalActions>>();
    const { armor } = useSelector((state: AppState) => state.equipment);
    const handleAbility = () => {
        const { header, text, degrade, rollResult } = defend(
            armor?.currentTier ?? 0
        );
        actionModalDispatch({
            type: 'SHOW_ACTION_MODAL',
            payload: {
                header: header,
                text: text,
                type: 'defence',
                rollResult,
                statistic: 'agility',
                burn: true,
            },
        });
        if (degrade) {
            equipmentDispatch({ type: 'DEGRADE_ARMOR' });
        }
    };
    return (
        <CharacterActionComponent
            effectDie={effectDie ?? Dice.d20}
            text={info}
            useAbility={handleAbility}
        />
    );
};
