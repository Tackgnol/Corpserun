import { useModifiers } from './useModifiers';
import { Dice, rollDie } from '../rollDie';
import { castSpell } from '../../features/Actions/utils';
import { useSelector } from 'react-redux';
import { AppState } from '../../redux/reducers/root.reducer';

interface SpellValues {
    header: string;
    text: string;
    becomeDizzy: boolean;
    rollResult: string;
}

interface UseSpell {
    cast: (spellEffect?: string) => SpellValues;
}

export const useSpell = (): UseSpell => {
    const { calculateAction } = useModifiers();
    const { dizzy } = useSelector((state: AppState) => state.hp);
    const cast = (spellEffect?: string) => {
        const roll = rollDie(Dice.d20);
        const finalRoll = roll + calculateAction('cast');
        return castSpell(roll, finalRoll, spellEffect, dizzy);
    };
    return { cast };
};
