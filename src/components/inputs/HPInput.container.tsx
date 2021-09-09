import React, { FC } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { HPInput } from './HPInput.component';
import { AppState } from '../../redux/reducers/root.reducer';
import { Dispatch } from 'redux';
import { HPActions } from '../../redux/actions/hp.actions';

export interface HPInputContainerProps {
    id: string;
    className?: string;
}
export const HPInputContainer: FC<HPInputContainerProps> = ({
    id,
    className,
}) => {
    const { currHP, dead, wounded } = useSelector(
        (state: AppState) => state.hp
    );
    const { maxHP } = useSelector((state: AppState) => state.stats);
    const hpDispatch = useDispatch<Dispatch<HPActions>>();

    if (typeof currHP === 'undefined') {
        hpDispatch({
            type: 'SET_HEALTH',
            payload: { currHP: maxHP, dead, wounded },
        });
    }
    return (
        <HPInput
            className={className}
            id={id}
            dead={dead}
            wounded={wounded}
            hp={currHP ?? 0}
        />
    );
};
