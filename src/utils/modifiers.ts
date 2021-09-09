export const getModifier = (statValue: number): number => {
    if (statValue < 0) {
        return -3;
    }
    switch (statValue) {
        case 0:
        case 1:
        case 2:
        case 3:
        case 4:
            return -3;
        case 5:
        case 6:
            return -2;
        case 7:
        case 8:
            return -1;
        case 9:
        case 10:
        case 11:
        case 12:
            return 0;
        case 13:
        case 14:
            return +1;
        case 15:
        case 16:
            return +2;
        case 17:
        case 18:
        case 19:
        case 20:
            return +3;
        default:
            return +3;
    }
};

export const formatModifier = (modifierValue: number): string => {
    if (modifierValue > 0) {
        return `+${modifierValue}`;
    }
    return `${modifierValue}`;
};
