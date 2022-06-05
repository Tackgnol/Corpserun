import React, { FC } from 'react';
import { StatisticInput } from './StatisticInput.container';

export const OmensComponent: FC = () => {
    return (
        <div className="text-center statistic-omens__wrapper">
            <div className="row statistic-omens__font statistic-omens__count text-center">
                <StatisticInput
                    id="omens"
                    tabIndex={2}
                    statName="omens"
                    showModifier={false}
                />
            </div>
            <div className="row statistic-omens__font statistic-omens__label text-center">
                Omens
            </div>
        </div>
    );
};
