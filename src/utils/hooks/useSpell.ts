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
    cast: (spellEffect?: string, presenceModifier?: number) => SpellValues;
}

export const useSpell = (): UseSpell => {
    const { calculateAction } = useModifiers();
    const { dizzy } = useSelector((state: AppState) => state.hp);
    const cast = (spellEffect?: string, presenceModifier = 0) => {
        const roll = rollDie(Dice.d20);
        const withModifier = roll + presenceModifier;
        const finalRoll = withModifier + calculateAction(withModifier, 'cast');
        return castSpell(roll, finalRoll, spellEffect, dizzy);
    };
    return { cast };
};
