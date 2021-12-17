import { FC } from 'react';
import { Dice } from '../../../../utils/rollDie';
import { CharacterActionComponent } from './CharacterAction.component';
import { attack, castSpell, defend, testStat } from '../../utils';
import { useDispatch, useSelector } from 'react-redux';
import { Dispatch } from 'redux';
import { ActionModalActions } from '../../../../redux/actions/actionModal.actions';
import { ModalType } from '../../../../models';
import { EquipmentActions } from '../../../../redux/actions/equipment.actions';
import { AppState } from '../../../../redux/reducers/root.reducer';
import { HPActions } from '../../../../redux/actions/hp.actions';

export interface CharacterActionProps {
    text: string;
    dice: Dice;
    type: ModalType;
    modifier?: number;
    additionalData?: string;
    uses?: number;
}

export const CharacterAction: FC<CharacterActionProps> = ({
    text,
    dice,
    type,
    modifier,
    additionalData,
    uses,
}) => {
    const equipmentDispatch = useDispatch<Dispatch<EquipmentActions>>();
    const actionModalDispatch = useDispatch<Dispatch<ActionModalActions>>();
    const hpDispatch = useDispatch<Dispatch<HPActions>>();
    const { armor } = useSelector((state: AppState) => state.equipment);
    const { dizzy } = useSelector((state: AppState) => state.hp);
    const useAbility = () => {
        switch (type) {
            case ModalType.attack:
                if (additionalData === 'defence') {
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
                } else {
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

                    if (typeof uses !== 'undefined' && additionalData) {
                        equipmentDispatch({
                            type: 'CONSUME_CHARGE',
                            payload: { equiped: additionalData },
                        });
                    }
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
            case ModalType.cast:
                const { spellHeader, becomeDizzy, spellResult } = castSpell(
                    additionalData,
                    modifier,
                    dizzy
                );
                if (becomeDizzy) {
                    hpDispatch({ type: 'SET_DIZZY', payload: true });
                }
                actionModalDispatch({
                    type: 'SHOW_ACTION_MODAL',
                    payload: {
                        header: spellHeader,
                        type: ModalType.cast,
                        text: spellResult,
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
            usesLeft={uses}
        />
    );
};
