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
    const { primaryWeapon, secondaryWeapon, items } = useSelector(
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
    const scrolls = items.filter((i) => i.tags.includes('scroll'));
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
            uses: primaryWeapon.amount?.curr,
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
            uses: secondaryWeapon.amount?.curr,
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
    actions.push({
        text: 'Defend',
        type: ModalType.attack,
        dice: Dice.d20,
        modifier: getModifier(agility),
        additionalData: 'defence',
    });
    scrolls.forEach((s) => {
        actions.push({
            text: s.name,
            dice: Dice.d20,
            modifier: getModifier(presence),
            type: ModalType.cast,
            additionalData: s.description,
        });
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
