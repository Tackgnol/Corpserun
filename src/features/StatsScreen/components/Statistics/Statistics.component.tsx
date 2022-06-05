import React, { FC } from 'react';

import './Statistics.css';
import { Statistic } from './Statistic';
import { OmensComponent } from './Omens.component';

export const Statistics: FC = () => {
    return (
        <div className="statistics-background container">
            <div className="row statistics-split__first">
                <div className="offset-2 col col-11">
                    <Statistic name="strength" />
                </div>
            </div>

            <div className="row statistics-split__second">
                <div className="offset-1 col col-13">
                    <Statistic name="agility" />
                </div>
            </div>

            <div className="row statistics-split__third">
                <div className="offset-1 col col-12">
                    <Statistic name="presence" />
                </div>
            </div>

            <div className="row statistics-split__fourth">
                <div className=" offset-2 col col-11">
                    <Statistic name="toughness" />
                </div>
            </div>
            <div className="row justify-content-center">
                <div className="offset-7 col col-7 statistic-omens">
                    <OmensComponent />
                </div>
            </div>
        </div>
    );
};
