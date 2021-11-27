import { Dice, rollDie } from '../../utils/rollDie';

export const attack = (dice: Dice, modifier = 0) => {
    const roll = rollDie(Dice.d20);
    const withModifier = roll + modifier;
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
    spellEffect: string,
    presenceModifier = 0,
    dizzy = false
) => {
    if (dizzy) {
        return {
            spellHeader: 'Your cast is a tremendous failure',
            spellResult: `Casting this while being dizzy was not the best idea... \n You fail to cast the spell with dire consequences`,
            dizzy: true,
        };
    }
    const roll = rollDie(Dice.d20);
    const withModifier = roll + presenceModifier;
    if (roll === 20) {
        return {
            spellHeader: 'Your cast is a raging success',
            spellResult: `Natural 20 (${withModifier}) \n ${spellEffect}`,
            dizzy: false,
        };
    }
    if (roll === 1) {
        return {
            spellHeader: 'Your cast is a tremendous failure',
            spellResult: `Natural 1 (${withModifier}) you fail to cast the spell with dire consequences`,
            dizzy: true,
        };
    }
    if (withModifier >= 12) {
        return {
            spellHeader: 'Your cast the spell',
            spellResult: `(${withModifier}) ${spellEffect}`,
            dizzy: false,
        };
    }
    return {
        spellHeader: 'Your fail to cast the spell',
        spellResult: `Result: ${withModifier}`,
        dizzy: true,
    };
};
