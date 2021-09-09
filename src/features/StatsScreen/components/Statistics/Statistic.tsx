import React, { FC } from 'react';
import { StatisticName } from './StatisticName';
import { Stats } from '../../../../models';
import { StatisticInput } from './StatisticInput.container';

interface StatisticNameProps {
    name: keyof Stats;
}

export const Statistic: FC<StatisticNameProps> = ({ name }) => {
    return (
        <div className="row statistic__container">
            <StatisticInput id="x" tabIndex={2} statName={name} />
            <StatisticName name={name} />
        </div>
    );
};
