import { Dispatch, FC } from 'react';
import { StatusBarComponent } from './StatusBar.component';
import { useDispatch, useSelector } from 'react-redux';
import { AppState } from '../../redux/reducers/root.reducer';
import './StatusBar.css';
import { HPActions } from '../../redux/actions/hp.actions';

export const StatusBar: FC = () => {
    const { wounded, dizzy } = useSelector((state: AppState) => state.hp);
    const hpDispatch = useDispatch<Dispatch<HPActions>>();
    const handleClick = () => {
        hpDispatch({ type: 'SET_DIZZY', payload: false });
    };
    return wounded || dizzy ? (
        <StatusBarComponent
            wounded={wounded}
            dizzy={dizzy}
            onClick={handleClick}
        />
    ) : null;
};
