import { CharacterActionComponent } from './CharacterAction.component';
import { ActionType, CharacterAttackAction } from '../../../../models';
import { FC } from 'react';
import { useDispatch } from 'react-redux';
import { Dispatch } from 'redux';
import { EquipmentActions } from '../../../../redux/actions/equipment.actions';
import { ActionModalActions } from '../../../../redux/actions/actionModal.actions';
import { Dice, rollDie } from '../../../../utils/rollDie';
import { useAttack } from '../../../../utils/hooks/useAttack';
import { AmmoActions } from '../../../../redux/actions/ammo.actions';

export const AttackActionContainer: FC<CharacterAttackAction> = ({
    info,
    effectDie,
    uses,
    ammoType,
    weaponType,
    effectModifier,
    damageDie,
    effects,
    statistic,
}) => {
    const equipmentDispatch = useDispatch<Dispatch<EquipmentActions>>();
    const actionModalDispatch = useDispatch<Dispatch<ActionModalActions>>();
    const ammoDispatch = useDispatch<Dispatch<AmmoActions>>();
    const type: Extract<ActionType, 'melee' | 'ranged'> =
        statistic === 'strength' ? 'melee' : 'ranged';
    const { attack } = useAttack();
    const handleAbility = () => {
        const { header, text, broken, rollResult } = attack(
            damageDie,
            type,
            uses,
            effectModifier,
            effectDie,
            effects
        );
        let finalText = text;
        if (effects && effectDie) {
            const effectString = effects[rollDie(effectDie)].text;
            finalText = `${text}\n${effectString}`;
        }
        actionModalDispatch({
            type: 'SHOW_ACTION_MODAL',
            payload: {
                header: header,
                text: finalText,
                rollResult,
                type,
                statistic,
                burn: true,
            },
        });
        if (typeof uses !== 'undefined' && weaponType) {
            ammoDispatch({
                type: 'DEPLETE_AMMO',
                payload: ammoType ?? '',
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
            effectDie={effectDie ?? Dice.d20}
            text={info}
            useAbility={handleAbility}
        />
    );
};
