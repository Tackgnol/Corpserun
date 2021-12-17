import { CharacterActionComponent } from './CharacterAction.component';
import { defend } from '../../utils';
import { CharacterActionProps, ModalType } from '../../../../models';
import { FC } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Dispatch } from 'redux';
import { EquipmentActions } from '../../../../redux/actions/equipment.actions';
import { ActionModalActions } from '../../../../redux/actions/actionModal.actions';
import { AppState } from '../../../../redux/reducers/root.reducer';

export const DefendActionContainer: FC<CharacterActionProps> = ({
    text,
    dice,
    modifier,
}) => {
    const equipmentDispatch = useDispatch<Dispatch<EquipmentActions>>();
    const actionModalDispatch = useDispatch<Dispatch<ActionModalActions>>();
    const { armor } = useSelector((state: AppState) => state.equipment);
    const handleAbility = () => {
        const { defenceResult, defenceHeader, degrade } = defend(
            modifier,
            armor?.currentTier
        );
        actionModalDispatch({
            type: 'SHOW_ACTION_MODAL',
            payload: {
                header: defenceHeader,
                text: defenceResult,
                type: ModalType.attack,
            },
        });
        if (degrade) {
            equipmentDispatch({ type: 'DEGRADE_ARMOR' });
        }
    };
    return (
        <CharacterActionComponent
            dice={dice}
            text={text}
            useAbility={handleAbility}
        />
    );
};
