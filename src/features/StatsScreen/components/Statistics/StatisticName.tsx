import React, { FC } from 'react';
import './Statistic.css';

interface StatisticNameProps {
    name: string;
}

export const StatisticName: FC<StatisticNameProps> = ({ name }) => {
    return (
        <div className="col col-6 d-flex justify-content-center statistic-name">
            <p className="text-right align-self-center statistic-name__field">
                {name}
            </p>
        </div>
    );
};
