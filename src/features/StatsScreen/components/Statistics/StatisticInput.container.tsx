import React, { ChangeEvent, FC } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { AppState } from '../../../../redux/reducers/root.reducer';
import { Dispatch } from 'redux';
import { SetStat, StatActions } from '../../../../redux/actions/stat.actions';
import { StatisticsInput } from './StatisticsInput.component';
import { Stats } from '../../../../models';

export interface StatisticInputProps {
    id: string;
    tabIndex: number;
    statName: keyof Stats;
    showModifier?: boolean;
}

export const StatisticInput: FC<StatisticInputProps> = ({
    statName,
    showModifier = true,
}) => {
    const { stats } = useSelector((state: AppState) => state);
    const statDispatch = useDispatch<Dispatch<StatActions>>();
    const statValue = stats[statName] ?? 0;
    const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
        const value = e.target.value;
        statDispatch({
            type: 'SET_STAT',
            payload: { [statName]: +value },
        } as SetStat);
    };
    return (
        <StatisticsInput
            value={statValue}
            onChange={handleChange}
            showModifier={showModifier}
        />
    );
};
