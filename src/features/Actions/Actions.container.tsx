import { FC } from 'react';
import './Actions.css';

import { ActionsComponent } from './Actions.component';
import { useDispatch, useSelector } from 'react-redux';
import { AppState } from '../../redux/reducers/root.reducer';
import { CharacterActionProps } from './components/CharacterActions/CharacterAction.container';
import { Dice } from '../../utils/rollDie';
import { Dispatch } from 'redux';
import { ActionModalActions } from '../../redux/actions/actionModal.actions';

export const Actions: FC = () => {
    const { primaryWeapon, secondaryWeapon } = useSelector(
        (state: AppState) => state.equipment
    );
    const { show, header, damageText } = useSelector(
        (state: AppState) => state.actionModal
    );
    const { abilities } = useSelector((state: AppState) => state.info);

    const actionModalDispatch = useDispatch<Dispatch<ActionModalActions>>();

    const handleClose = () => {
        actionModalDispatch({ type: 'HIDE_ACTION_MODAL' });
    };
    const actions: CharacterActionProps[] = [];
    if (primaryWeapon) {
        actions.push({
            text: primaryWeapon?.name ?? 'action',
            dice: primaryWeapon?.dice ?? Dice.d20,
            type: 'attack',
        });
    }
    if (secondaryWeapon) {
        actions.push({
            text: secondaryWeapon?.name ?? 'action',
            dice: secondaryWeapon?.dice ?? Dice.d20,
            type: 'attack',
        });
    }
    abilities
        .filter((a) => a.dice)
        .forEach((a) => {
            actions.push({
                text: a.name,
                dice: a.dice ?? Dice.d20,
                type: 'ability',
            });
        });
    return (
        <ActionsComponent
            actions={actions}
            showModal={show}
            damageText={damageText}
            header={header}
            closeModal={handleClose}
        />
    );
};
