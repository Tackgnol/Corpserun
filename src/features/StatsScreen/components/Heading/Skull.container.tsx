import { FC } from 'react';
import { SkullComponent } from './Skull.component';
import { useSelector } from 'react-redux';
import { AppState } from '../../../../redux/reducers/root.reducer';

export const Skull: FC = () => {
    const { currHP } = useSelector((state: AppState) => state.hp);
    const { maxHP } = useSelector((state: AppState) => state.stats);
    return <SkullComponent currHP={currHP ?? 0} maxHP={maxHP} />;
};
