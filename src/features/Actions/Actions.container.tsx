import { FC } from 'react';
import './Actions.css';

import { ActionsComponent } from './Actions.component';
import { useSelector } from 'react-redux';
import { AppState } from '../../redux/reducers/root.reducer';
import { Dice } from '../../utils/rollDie';
import { getModifier } from '../../utils/modifiers';
import { CharacterAction } from '../../models';

export const Actions: FC = () => {
    const { primaryWeapon, secondaryWeapon, items } = useSelector(
        (state: AppState) => state.equipment
    );
    // TODO: Add usable items here!
    const { ammo } = useSelector((state: AppState) => state);
    const { abilities } = useSelector((state: AppState) => state.info);
    const { strength, agility, presence } = useSelector(
        (state: AppState) => state.stats
    );
    const scrolls = items.filter((i) => i.tags.includes('scroll'));
    const actions: CharacterAction[] = [];
    let isMelee = true;
    if (primaryWeapon) {
        isMelee = primaryWeapon.tags.includes('melee');
        const uses = ammo[primaryWeapon.ammo?.type ?? ''];
        actions.push({
            info: primaryWeapon?.name ?? 'action',
            effectDie: primaryWeapon?.effectDie ?? Dice.d20,
            type: isMelee ? 'melee' : 'ranged',
            modifier: isMelee ? getModifier(strength) : getModifier(presence),
            weaponType: 'primaryWeapon',
            uses: uses,
            damageDie: primaryWeapon.dice,
            statistic: isMelee ? 'strength' : 'presence',
            ammoType: primaryWeapon.ammo?.type,
        });
    }
    if (secondaryWeapon) {
        isMelee = secondaryWeapon.tags.includes('melee');
        const uses = ammo[secondaryWeapon.ammo?.type ?? ''];
        actions.push({
            info: secondaryWeapon?.name ?? 'action',
            effectDie: secondaryWeapon?.effectDie ?? Dice.d20,
            type: isMelee ? 'melee' : 'ranged',
            modifier: isMelee ? getModifier(strength) : getModifier(presence),
            weaponType: 'secondaryWeapon',
            uses,
            damageDie: secondaryWeapon.dice,
            statistic: isMelee ? 'strength' : 'presence',
            ammoType: secondaryWeapon.ammo?.type,
        });
    }
    abilities
        .filter((a) => a.effectRoll)
        .forEach((a) => {
            actions.push({
                info: a.name,
                effectDie: a.effectRoll ?? Dice.d6,
                type: 'ability',
                effects: a.effects,
                successDie: a.dice,
                successDifficulty: a.difficulty,
                statistic: a.statistic ?? 'presence',
            });
        });
    actions.push({
        info: 'Defend',
        type: 'defence',
        effectDie: Dice.d20,
        modifier: getModifier(agility),
        statistic: 'agility',
    });
    scrolls.forEach((s) => {
        actions.push({
            info: s.name,
            effectDie: Dice.d20,
            modifier: getModifier(presence),
            type: 'cast',
            spellText: s.description,
            statistic: 'presence',
        });
    });

    return <ActionsComponent actions={actions} />;
};
