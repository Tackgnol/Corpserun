export enum Dice {
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

export const rollMultiDie = (dice: Dice[]): number => {
    return dice.reduce((acc, curr) => {
        return acc + rollDie(curr);
    });
};
