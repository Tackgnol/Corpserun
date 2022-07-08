import { useModifiers } from './useModifiers';
import { Dice, rollDie } from '../rollDie';
import { BaseStats } from '../../models';
import { testGuide, testStat } from '../../features/Actions/utils';
import { useSelector } from 'react-redux';
import { AppState } from '../../redux/reducers/root.reducer';

interface TestValues {
    header: string;
    text: string;
    rollResult?: string;
}

interface UseTest {
    test: (statistic: keyof BaseStats, modifier?: number) => TestValues;
}

export const useTest = (): UseTest => {
    const { calculateStatTest } = useModifiers();
    const { diceMode } = useSelector((state: AppState) => state.settings);
    const test = (statistic: keyof BaseStats, modifier: number = 0) => {
        const roll = rollDie(Dice.d20);
        const withModifier = roll + modifier;
        const finalRoll =
            withModifier + calculateStatTest(withModifier, statistic);
        return diceMode === 'Description'
            ? testGuide(12, 12 - modifier)
            : testStat(roll, finalRoll);
    };
    return { test };
};
