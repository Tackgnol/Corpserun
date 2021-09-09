import { Dice } from './rollDie';

export function multiRollOnTable<T extends { roll?: number }>(
    table: T[],
    rolls: number,
    die?: Dice
) {
    const items: T[] = [];
    const copy: T[] = [...table];
    for (let i = 0; i < rolls; i++) {
        const item = rollOnTable(copy, die);
        copy.splice(copy.indexOf(item), 1);
        items.push(item);
    }
    return items;
}

export function multiRollOnTableString(table: string[], rolls: number) {
    const items: string[] = [];
    const copy: string[] = [...table];
    for (let i = 0; i < rolls; i++) {
        const item = rollOnTableString(copy);
        copy.splice(copy.indexOf(item), 1);
        items.push(item);
    }
    return items;
}

export function rollOnTable<T extends { roll?: number }>(
    table: T[],
    die?: Dice
): T {
    const withRolls = table.filter((t) => t.hasOwnProperty('roll'));
    if (withRolls.length) {
        if (die) {
            const limited = withRolls.filter((t) => t.roll ?? 0 <= die);
            return limited[Math.floor(Math.random() * limited.length)];
        }
        return withRolls[Math.floor(Math.random() * withRolls.length)];
    }
    return table[Math.floor(Math.random() * table.length)];
}

export const rollOnTableString = (table: string[]) => {
    return table[Math.floor(Math.random() * table.length)];
};
