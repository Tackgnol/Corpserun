import React, { FC } from 'react';
import './Statistic.css';
import { TestStatContainer } from '../../../Actions/components/CharacterActions/TestStat.container';
import { Dice } from '../../../../utils/rollDie';
import { BaseStats } from '../../../../models';

interface StatisticNameProps {
    name: keyof BaseStats;
}

export const StatisticName: FC<StatisticNameProps> = ({ name }) => {
    return (
        <div className="col col-7 d-flex statistic-name">
            {name}

            <TestStatContainer
                key={name}
                info={name}
                effectDie={Dice.d20}
                statistic={name}
                showOnlyDie={true}
            />
        </div>
    );
};
