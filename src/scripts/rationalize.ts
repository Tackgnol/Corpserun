import { armors } from '../data/armors';
import { equipment } from '../data/equipment';
import { habits } from '../data/habits';
import { tales } from '../data/tales';
import { weapons } from '../data/weapons';

import { descriptions } from '../data/descriptions';
import * as fs from 'fs';

const parsedArmors = [];
const parsedHabits = [];
const parsedTales = [];
const parsedWeapons = [];
const parsedEquipments = [];
const readableDescriptions = descriptions as { [name: string]: string };
for (let i = 0; i < armors.length; i++) {
    const { name, description } = armors[i];
    parsedArmors.push({
        ...armors[i],
        name: readableDescriptions[name],
        description: readableDescriptions[description],
    });
}

for (let i = 0; i < equipment.length; i++) {
    const { name, description } = equipment[i];
    const item = { name: readableDescriptions[name], description: '' };
    if (description) {
        item.description = readableDescriptions[description];
    }
    parsedEquipments.push({
        ...equipment[i],
        name: item.name,
        description: item.description,
    });
}

for (let i = 0; i < weapons.length; i++) {
    const { name, description } = weapons[i];
    parsedWeapons.push({
        ...weapons[i],
        name: readableDescriptions[name],
        description: readableDescriptions[description],
    });
}

for (let i = 0; i < tales.length; i++) {
    const { name, items } = tales[i];
    const item = { name: readableDescriptions[name] };
    const parsedItems = [];
    if (items) {
        for (let j = 0; j < items.length; j++) {
            const { name, description } = items[j];
            parsedItems.push({
                ...items[i],
                name: readableDescriptions[name],
                description: readableDescriptions[description],
            });
        }
    }
    parsedTales.push({
        ...tales[i],
        name: item.name,
        items: [...parsedItems],
    });
}

for (let i = 0; i < habits.length; i++) {
    const { id, items } = habits[i];
    const item = { name: readableDescriptions[id] };
    const parsedItems = [];
    if (items) {
        for (let j = 0; j < items.length; j++) {
            const { name, description } = items[j];
            parsedItems.push({
                ...items[i],
                name: readableDescriptions[name],
                description: readableDescriptions[description],
            });
        }
    }
    parsedHabits.push({
        name: item.name,
        items: [...parsedItems],
    });
}

const toExport = {
    armors: parsedArmors,
    weapons: parsedWeapons,
    equipment: parsedEquipments,
    tales: parsedTales,
    habits: parsedHabits,
};

fs.writeFileSync('./export.ts', JSON.stringify(toExport));
