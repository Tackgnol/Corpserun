import React, { FC } from 'react';
import { StatisticName } from './StatisticName';
import { BaseStats } from '../../../../models';
import { StatisticInput } from './StatisticInput.container';

interface StatisticNameProps {
    name: keyof BaseStats;
}

export const Statistic: FC<StatisticNameProps> = ({ name }) => {
    return (
        <div className="row statistic__container">
            <StatisticInput
                id={name}
                tabIndex={2}
                statName={name}
                showModifier={true}
            />

            <StatisticName name={name} />
        </div>
    );
};
