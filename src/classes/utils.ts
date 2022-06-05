import { Ability } from '../models';
import { data } from '../assets/gameData';
import { rollOnTable } from '../utils/rollOnTable';

export const generateDescription = (
    className = 'deplorable wretch',
    traits: string[],
    habit: string,
    tale: string,
    disfigurement: string
) => {
    return `A ${traits[0]} and ${traits[1]} ${className}.\n${habit}.\n${tale} \nYour body is Broken: \n\t${disfigurement}`;
};

export const generateAbilities = (abilities: Ability[]) => {
    return abilities.reduce((acc, curr) => {
        return acc + `* ${curr?.name} - ${curr?.description} \n`;
    }, '');
};

export const findItem = (name: string) => {
    const { equipment, weapons, armors } = data;
    const items = [...equipment, ...weapons, ...armors];
    const item = items.find((e) => e.name.toLowerCase() === name.toLowerCase());
    if (!item) {
        throw new Error('Item not found!');
    }

    return item;
};

export const getScroll = (type: 'sacred' | 'unclean') => {
    const { equipment } = data;
    const scrolls = equipment.filter(
        (e) => e.tags.includes('scroll') && e.tags.includes(type)
    );
    return rollOnTable(scrolls);
};
