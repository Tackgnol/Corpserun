import { FC } from 'react';
import './Actions.css';

import { ActionsComponent } from './Actions.component';
import { useSelector } from 'react-redux';
import { AppState } from '../../redux/reducers/root.reducer';
import { CharacterActionProps } from './components/CharacterActions/CharacterAction.container';
import { Dice } from '../../utils/rollDie';

export const Actions: FC = () => {
    const { primaryWeapon, secondaryWeapon } = useSelector(
        (state: AppState) => state.equipment
    );
    const { abilities } = useSelector((state: AppState) => state.info);
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
    return <ActionsComponent actions={actions} />;
};
