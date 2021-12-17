import { Dice, rollDie } from '../../utils/rollDie';

export const attack = (dice: Dice, modifier = 0, ammo?: number) => {
    const roll = rollDie(Dice.d20);
    const withModifier = roll + modifier;
    if (typeof ammo !== 'undefined') {
        if (ammo <= 0) {
            return {
                damageHeader: 'You do not have the ammo for this weapon',
                damageText: `You can try throwing it at the enemy...Or cheating your GM \n In that case you rolled ${withModifier}(${roll})`,
                broken: false,
            };
        }
    }
    if (roll === 20) {
        return {
            damageHeader: 'The gods smile upon you, the blow struck true',
            damageText: `You deal ${rollDie(dice) * 2} damage`,
            broken: false,
        };
    } else if (withModifier >= 12) {
        return {
            damageHeader: 'You hit your target',
            damageText: `You deal ${rollDie(dice)} damage`,
            broken: false,
        };
    } else if (roll === 1) {
        return {
            damageHeader: 'Your weapon broke',
            broken: true,
        };
    } else {
        return { damageHeader: 'You missed your target...', broken: false };
    }
};

export const testStat = (modifier: number = 0) => {
    const roll = rollDie(Dice.d20);
    const withModifier = roll + modifier;
    if (roll === 20) {
        return {
            testHeader: 'That went much better than expected',
            testResult: `Natural 20 (with modifier: ${withModifier})`,
        };
    } else if (roll === 1) {
        return {
            testHeader: 'You fumble and fail miserably',
            testResult: `Natural 1 (with modifier: ${withModifier})`,
        };
    }
    return {
        testHeader: "Well it's something",
        testResult: `You roll ${withModifier}`,
    };
};

export const castSpell = (
    spellEffect?: string,
    presenceModifier = 0,
    dizzy = false
) => {
    const effect = spellEffect ?? 'You cast your spell!';
    if (dizzy) {
        return {
            spellHeader: 'Your cast is a tremendous failure',
            spellResult: `Casting this while being dizzy was not the best idea... \n You fail to cast the spell with dire consequences`,
            becomeDizzy: true,
        };
    }
    const roll = rollDie(Dice.d20);
    const withModifier = roll + presenceModifier;
    if (roll === 20) {
        return {
            spellHeader: 'Your cast is a raging success',
            spellResult: `Natural 20 (${withModifier}) \n ${effect}`,
            becomeDizzy: false,
        };
    }
    if (roll === 1) {
        return {
            spellHeader: 'Your cast is a tremendous failure',
            spellResult: `Natural 1 (${withModifier}) you fail to cast the spell with dire consequences, and you feel dizzy`,
            becomeDizzy: true,
        };
    }
    if (withModifier >= 12) {
        return {
            spellHeader: 'Your cast the spell',
            spellResult: `(${withModifier}) ${effect}`,
            becomeDizzy: false,
        };
    }
    return {
        spellHeader: 'Your fail to cast the spell',
        spellResult: `You become dizzy. Result: ${withModifier}`,
        becomeDizzy: true,
    };
};

export const defend = (modifier = 0, tier = 0) => {
    const roll = rollDie(Dice.d20);
    const withModifier = roll + modifier;
    const shieldedDamage = tier
        ? `\nYour armor saves you from ${rollReduction(tier)} damage`
        : '';
    if (roll === 20) {
        return {
            defenceHeader: 'That went much better than expected',
            defenceResult: `Your opponent misses, and you get a free attack`,
            degrade: false,
        };
    }
    if (roll === 1) {
        return {
            defenceHeader: 'You fumble and fail miserably',
            defenceResult: `You take double damage, and your armor is reduced one tier${shieldedDamage}`,
            degrade: true,
        };
    }
    if (withModifier >= 12) {
        return {
            defenceHeader: 'You managed to dodge',
            defenceResult: `Your opponent misses`,
            degrade: false,
        };
    }
    return {
        defenceHeader: 'The blow hits',
        defenceResult: `You failed to dodge the attack${shieldedDamage}`,
        degrade: false,
    };
};

const rollReduction = (armorTier: number) => {
    switch (armorTier) {
        case 1:
            return rollDie(2);
        case 2:
            return rollDie(4);
        case 3:
            return rollDie(6);
        default:
            return null;
    }
};
