import { Dice, dieString, rollDie, rollMultiDie } from '../../utils/rollDie';
import { DieEffects } from '../../models';

export const executeAttack = (
    dice: Dice[],
    roll: number,
    withModifier: number,
    ammo?: number,
    damageModifier = 0
) => {
    if (typeof ammo !== 'undefined') {
        if (ammo <= 0) {
            return {
                header: 'You do not have the ammo for this weapon',
                text: `You can try throwing it at the enemy...Or cheating your GM \n In that case you rolled ${withModifier}(${roll})`,
                rollResult: '',
                broken: false,
            };
        }
    }
    if (roll === 20) {
        return {
            header: 'The gods smile upon you, the blow struck true',
            text: `You deal ${rollMultiDie(dice) * 2 + damageModifier} damage`,
            rollResult: `You rolled ${roll}, result is: ${withModifier}`,
            broken: false,
        };
    } else if (withModifier >= 12) {
        return {
            header: 'You hit your target',
            text: `You deal ${rollMultiDie(dice) + damageModifier} damage`,
            rollResult: `You rolled ${roll}, result is: ${withModifier}`,
            broken: false,
        };
    } else if (roll === 1) {
        return {
            header: 'Your weapon broke',
            text: `You rolled ${roll}, result is: ${withModifier}`,
            rollResult: `You rolled ${roll}, result is: ${withModifier}`,
            broken: true,
        };
    } else {
        return {
            header: 'You missed your target...',
            text: `Better luck next time.`,
            rollResult: `You rolled ${roll}, result is: ${withModifier}`,
            broken: false,
        };
    }
};

export const attackGuide = (
    dice: Dice[],
    defaultDifficulty: number,
    finalDifficulty: number
) => {
    return {
        header: `Roll a D20,`,
        text: `You succeed on ${finalDifficulty} (default difficulty: ${defaultDifficulty}). \n If succeeded roll a [${dice.map(
            (d) => dieString(d)
        )}] for damage.`,
        info: 'Your weapon is lost or broken on 1, you deal double damage on 20',
    };
};

export const testStat = (roll: number, withModifiers: number) => {
    if (roll === 20) {
        return {
            header: 'That went much better than expected',
            text: `Natural 20`,
            rollResult: `You rolled ${roll}, result is: ${withModifiers}`,
        };
    } else if (roll === 1) {
        return {
            header: 'You fumble and fail miserably',
            text: `Natural 1 `,
            rollResult: `You rolled ${roll}, result is: ${withModifiers}`,
        };
    }
    return {
        header: "Well it's something",
        text: ``,
        rollResult: `You rolled ${roll}, result is: ${withModifiers}`,
    };
};

export const testGuide = (
    defaultDifficulty: number,
    finalDifficulty: number
) => {
    return {
        header: `Roll a D20 die,`,
        text: `You succeed on ${finalDifficulty} (default difficulty: ${defaultDifficulty})`,
        info: 'Your fumble on 1, you have a critical success on 20',
    };
};

export const castSpell = (
    roll: number,
    withModifiers: number,
    spellEffect?: string,
    dizzy = false
) => {
    const effect = spellEffect ?? 'You cast your spell!';
    if (dizzy) {
        return {
            header: 'Your cast is a tremendous failure',
            text: `Casting this while being dizzy was not the best idea... \n You fail to cast the spell with dire consequences`,
            rollResult: `You rolled ${roll}, result is: ${withModifiers}`,
            becomeDizzy: true,
        };
    }
    if (roll === 20) {
        return {
            header: 'Your cast is a raging success',
            text: `Natural 20 \n ${effect}`,
            rollResult: `You rolled ${roll}, result is: ${withModifiers}`,
            becomeDizzy: false,
        };
    }
    if (roll === 1) {
        return {
            header: 'Your casit is a tremendous failure',
            text: `Natural 1 you fail to cast the spell with dire consequences, and you feel dizzy`,
            rollResult: `You rolled ${roll}, result is: ${withModifiers}`,
            becomeDizzy: true,
        };
    }
    if (withModifiers >= 12) {
        return {
            header: 'Your cast the spell',
            text: `${effect}`,
            rollResult: `You rolled ${roll}, result is: ${withModifiers}`,
            becomeDizzy: false,
        };
    }
    return {
        header: 'Your fail to cast the spell',
        text: `You become dizzy.`,
        rollResult: `You rolled ${roll}, result is: ${withModifiers}`,
        becomeDizzy: true,
    };
};

export const castGuide = (
    defaultDifficulty: number,
    finalDifficulty: number,
    dizzy: boolean
) => {
    if (dizzy) {
        return {
            header: 'Your cast is a tremendous failure',
            info: `Casting this while being dizzy was not the best idea... \n You fail to cast the spell with dire consequences`,
        };
    }
    return {
        header: `Roll a D20 die,`,
        text: `You succeed on ${finalDifficulty} (default difficulty: ${defaultDifficulty})`,
        info: 'If you fail to cast your spell you become dizzy',
    };
};

export const executeDefend = (roll: number, withModifier: number, tier = 0) => {
    const shieldedDamage = tier
        ? `\nYour armor saves you from ${rollDie(
              getReduction(tier) ?? 0
          )} damage`
        : '';
    if (roll === 20) {
        return {
            header: 'That went much better than expected',
            text: `Your opponent misses, and you get a free attack`,
            rollResult: `You rolled ${roll}, result is: ${withModifier}`,
            degrade: false,
        };
    }
    if (roll === 1) {
        return {
            header: 'You fumble and fail miserably',
            text: `You take double damage, and your armor is reduced one tier${shieldedDamage}`,
            rollResult: `You rolled ${roll}, result is: ${withModifier}`,
            degrade: true,
        };
    }
    if (withModifier >= 12) {
        return {
            header: 'You managed to dodge',
            text: `Your opponent misses`,
            rollResult: `You rolled ${roll}, result is: ${withModifier}`,
            degrade: false,
        };
    }
    return {
        header: 'The blow hits',
        text: `You failed to dodge the attack${shieldedDamage}`,
        rollResult: `You rolled ${roll}, result is: ${withModifier}`,
        degrade: false,
    };
};

export const guideDefend = (
    defaultDifficulty: number,
    finalDifficulty: number,
    tier: number
) => {
    return {
        header: 'Roll a D20,',
        text: `You succeed on ${finalDifficulty} (default difficulty: ${defaultDifficulty}). \n ${
            tier > 0
                ? `If hit roll a ${dieString(
                      getReduction(tier) ?? Dice.d1
                  )} for damage reduction.`
                : ''
        }`,
        info: 'You armor tier is reduced on a 1, on a 20 you get a free attack.',
    };
};

const getReduction = (armorTier: number) => {
    switch (armorTier) {
        case 1:
            return Dice.d2;
        case 2:
            return Dice.d4;
        case 3:
            return Dice.d6;
        default:
            return null;
    }
};

export const executeAbility = (
    roll: number,
    withModifier: number,
    effectDie: Dice,
    effects: DieEffects,
    successDie?: Dice,
    successDifficulty = 12
) => {
    if (successDie) {
        if (withModifier <= successDifficulty) {
            return {
                header: 'Failure',
                text: 'You fail to use your ability',
                rollResult: `You rolled ${roll} with modifier ${withModifier}`,
            };
        }
    }
    const effectRoll = rollDie(effectDie);
    const effect = effects[effectRoll];
    return {
        header: 'You use your ability',
        text: effect.text,
        gainItem: effect.gainItem,
        applyModifier: effect.statuses,
        rollResult: `You rolled ${roll} with modifier ${withModifier}`,
    };
};

export const guideAbility = (
    dice: Dice,
    effectDie: Dice,
    defaultDifficulty: number,
    finalDifficulty: number
) => {
    return {
        header: `Roll a ${dieString(dice)}`,
        text: `You succeed on ${finalDifficulty} (default difficulty: ${defaultDifficulty})`,
        info: `On success roll a ${dieString(
            effectDie
        )}, and check the table below`,
    };
};

export const executeHeal = (value: number | Dice) => {
    const heal = rollDie(value);
    return {
        header: 'You heal your wounds',
        text: `You managed to heal ${heal}`,
        heal,
    };
};
