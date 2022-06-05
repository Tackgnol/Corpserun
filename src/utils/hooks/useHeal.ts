import { useDispatch } from 'react-redux';
import { Dispatch } from 'redux';
import { HPActions } from '../../redux/actions/hp.actions';
import { Equipment } from '../../models';
import { executeHeal } from '../../features/Actions/utils';

export const useHeal = (item: Equipment) => {
    const hpDispatch = useDispatch<Dispatch<HPActions>>();
    const use = item?.use;
    const heal = () => {
        const { heal, text, header } = executeHeal(use?.value ?? 0);
        hpDispatch({ type: 'HEAL_DAMAGE', payload: heal });
        return { text, header };
    };
    return { heal };
};
