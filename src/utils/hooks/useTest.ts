import { useModifiers } from './useModifiers';
import { Dice, rollDie } from '../rollDie';
import { BaseStats } from '../../models';
import { testStat } from '../../features/Actions/utils';

interface TestValues {
    header: string;
    text: string;
    rollResult: string;
}

interface UseTest {
    test: (statistic: keyof BaseStats, modifier?: number) => TestValues;
}

export const useTest = (): UseTest => {
    const { calculateStatTest } = useModifiers();
    const test = (statistic: keyof BaseStats, modifier: number = 0) => {
        const roll = rollDie(Dice.d20);
        const withModifier = roll + modifier;
        const finalRoll =
            withModifier + calculateStatTest(withModifier, statistic);
        return testStat(roll, finalRoll);
    };
    return { test };
};
