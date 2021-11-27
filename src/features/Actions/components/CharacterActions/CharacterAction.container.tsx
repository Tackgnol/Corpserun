import { FC } from 'react';
import { Dice } from '../../../../utils/rollDie';
import { CharacterActionComponent } from './CharacterAction.component';
import { attack, testStat } from '../../utils';
import { useDispatch } from 'react-redux';
import { Dispatch } from 'redux';
import { ActionModalActions } from '../../../../redux/actions/actionModal.actions';
import { ModalType } from '../../../../models';
import { EquipmentActions } from '../../../../redux/actions/equipment.actions';

export interface CharacterActionProps {
    text: string;
    dice: Dice;
    type: ModalType;
    modifier?: number;
    additionalData?: string;
}

export const CharacterAction: FC<CharacterActionProps> = ({
    text,
    dice,
    type,
    modifier,
    additionalData,
}) => {
    const equipmentDispatch = useDispatch<Dispatch<EquipmentActions>>();
    const actionModalDispatch = useDispatch<Dispatch<ActionModalActions>>();
    const useAbility = () => {
        switch (type) {
            case ModalType.attack:
                const { damageHeader, damageText, broken } = attack(
                    dice,
                    modifier
                );
                actionModalDispatch({
                    type: 'SHOW_ACTION_MODAL',
                    payload: {
                        header: damageHeader,
                        text: damageText,
                        type: ModalType.attack,
                    },
                });
                if (broken) {
                    if (additionalData === 'primaryWeapon') {
                        equipmentDispatch({
                            type: 'LOSE_WEAPON',
                            payload: 'primaryWeapon',
                        });
                    }
                    if (additionalData === 'secondaryWeapon') {
                        equipmentDispatch({
                            type: 'LOSE_WEAPON',
                            payload: 'secondaryWeapon',
                        });
                    }
                }
                break;
            case ModalType.stat:
                const { testResult, testHeader } = testStat(modifier);
                actionModalDispatch({
                    type: 'SHOW_ACTION_MODAL',
                    payload: {
                        header: testHeader,
                        text: testResult,
                        type: ModalType.stat,
                    },
                });
                break;
            default:
                console.log('not implemented!');
        }
    };
    return (
        <CharacterActionComponent
            dice={dice}
            text={text}
            useAbility={useAbility}
        />
    );
};
