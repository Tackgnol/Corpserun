import { FC } from 'react';
import './Actions.css';

import { ActionsComponent } from './Actions.component';
import { useDispatch, useSelector } from 'react-redux';
import { AppState } from '../../redux/reducers/root.reducer';
import { CharacterActionProps } from './components/CharacterActions/CharacterAction.container';
import { Dice } from '../../utils/rollDie';
import { Dispatch } from 'redux';
import { ActionModalActions } from '../../redux/actions/actionModal.actions';
import { getModifier } from '../../utils/modifiers';
import { ModalType } from '../../models';

export const Actions: FC = () => {
    const { primaryWeapon, secondaryWeapon } = useSelector(
        (state: AppState) => state.equipment
    );
    const { show, header, text, type } = useSelector(
        (state: AppState) => state.actionModal
    );
    const { abilities } = useSelector((state: AppState) => state.info);
    const { strength, toughness, agility, presence } = useSelector(
        (state: AppState) => state.stats
    );
    const actionModalDispatch = useDispatch<Dispatch<ActionModalActions>>();

    const handleClose = () => {
        actionModalDispatch({ type: 'HIDE_ACTION_MODAL' });
    };
    const actions: CharacterActionProps[] = [];
    if (primaryWeapon) {
        actions.push({
            text: primaryWeapon?.name ?? 'action',
            dice: primaryWeapon?.dice ?? Dice.d20,
            type: ModalType.attack,
            modifier: primaryWeapon.tags.includes('melee')
                ? getModifier(strength)
                : getModifier(presence),
            additionalData: 'primaryWeapon',
        });
    }
    if (secondaryWeapon) {
        actions.push({
            text: secondaryWeapon?.name ?? 'action',
            dice: secondaryWeapon?.dice ?? Dice.d20,
            type: ModalType.attack,
            modifier: secondaryWeapon.tags.includes('melee')
                ? getModifier(strength)
                : getModifier(presence),
            additionalData: 'secondaryWeapon',
        });
    }
    abilities
        .filter((a) => a.dice)
        .forEach((a) => {
            actions.push({
                text: a.name,
                dice: a.dice ?? Dice.d20,
                type: ModalType.ability,
            });
        });
    actions.push({
        text: 'Strength',
        type: ModalType.stat,
        dice: Dice.d20,
        modifier: getModifier(strength),
    });
    actions.push({
        text: 'Toughness',
        type: ModalType.stat,
        dice: Dice.d20,
        modifier: getModifier(toughness),
    });
    actions.push({
        text: 'Agility',
        type: ModalType.stat,
        dice: Dice.d20,
        modifier: getModifier(agility),
    });
    actions.push({
        text: 'Presence',
        type: ModalType.stat,
        dice: Dice.d20,
        modifier: getModifier(presence),
    });
    return (
        <ActionsComponent
            actions={actions}
            showModal={show}
            text={text}
            header={header}
            type={type}
            closeModal={handleClose}
        />
    );
};
