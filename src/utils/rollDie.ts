export enum Dice {
    d1 = 1,
    d2 = 2,
    d3 = 3, // not a die, I know...
    d4 = 4,
    d6 = 6,
    d8 = 8,
    d10 = 10,
    d12 = 12,
    d20 = 20,
    d100 = 100,
}

export const rollDie = (dice: Dice): number => {
    switch (dice) {
        case 1:
            return 1;
        case Dice.d2:
            return Math.floor(Math.random() * 1) + 1;
        case Dice.d3:
            return Math.floor(Math.random() * 2) + 1;
        case Dice.d4:
            return Math.floor(Math.random() * 4) + 1;
        case Dice.d6:
            return Math.floor(Math.random() * 6) + 1;
        case Dice.d8:
            return Math.floor(Math.random() * 8) + 1;
        case Dice.d10:
            return Math.floor(Math.random() * 10) + 1;
        case Dice.d12:
            return Math.floor(Math.random() * 12) + 1;
        case Dice.d20:
            return Math.floor(Math.random() * 20) + 1;
        case Dice.d100:
            return Math.floor(Math.random() * 100) + 1;
        default:
            return 0;
    }
};

export const dieString = (dice: Dice): string => {
    switch (dice) {
        case 1:
            return 'D1 die';
        case Dice.d2:
            return 'Coin. heads 1, tails 2';
        case Dice.d3:
            return 'D6 die result is: 1-2=1, 3-4=2 and 5-6=3';
        case Dice.d4:
            return 'D4 die';
        case Dice.d6:
            return 'D6 die';
        case Dice.d8:
            return 'D8 die';
        case Dice.d10:
            return 'D10 die';
        case Dice.d12:
            return 'D12 die';
        case Dice.d20:
            return 'D20 die';
        case Dice.d100:
            return 'D100 die';
        default:
            return 'Unknown die ¯\\_(ツ)_/¯';
    }
};

export const rollMultiDie = (dice: Dice[]): number => {
    return dice.reduce((acc: number, curr) => {
        const roll = rollDie(curr);
        return acc + roll;
    }, 0);
};

export const rollFromTo = (from: number, to: number) => {
    return Math.floor(Math.random() * (to - from + 1) + from);
};
