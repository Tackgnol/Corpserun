import { CharacterActionComponent } from './CharacterAction.component';
import { attack } from '../../utils';
import { CharacterActionProps, ModalType } from '../../../../models';
import { FC } from 'react';
import { useDispatch } from 'react-redux';
import { Dispatch } from 'redux';
import { EquipmentActions } from '../../../../redux/actions/equipment.actions';
import { ActionModalActions } from '../../../../redux/actions/actionModal.actions';

export const AttackActionContainer: FC<CharacterActionProps> = ({
    text,
    dice,
    modifier,
    uses,
    weaponType,
}) => {
    const equipmentDispatch = useDispatch<Dispatch<EquipmentActions>>();
    const actionModalDispatch = useDispatch<Dispatch<ActionModalActions>>();
    const handleAbility = () => {
        const { damageHeader, damageText, broken } = attack(
            dice,
            modifier,
            uses
        );
        actionModalDispatch({
            type: 'SHOW_ACTION_MODAL',
            payload: {
                header: damageHeader,
                text: damageText,
                type: ModalType.attack,
            },
        });

        if (typeof uses !== 'undefined' && weaponType) {
            equipmentDispatch({
                type: 'CONSUME_CHARGE',
                payload: { equiped: weaponType },
            });
        }
        if (broken) {
            if (weaponType === 'primaryWeapon') {
                equipmentDispatch({
                    type: 'LOSE_WEAPON',
                    payload: 'primaryWeapon',
                });
            }
            if (weaponType === 'secondaryWeapon') {
                equipmentDispatch({
                    type: 'LOSE_WEAPON',
                    payload: 'secondaryWeapon',
                });
            }
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
