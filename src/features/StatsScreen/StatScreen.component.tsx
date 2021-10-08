import React, { FC } from 'react';
import { Actions } from '../Actions/Actions.container';
import { Heading } from './components/Heading/Heading';
import { Statistics } from './components/Statistics/Statistics.component';

interface StatScreenComponentProps {
    strength: number;
    agility: number;
    presence: number;
    toughness: number;
    omens: number;
}

export const StatScreenComponent: FC<StatScreenComponentProps> = ({
    strength,
    presence,
    agility,
    toughness,
    omens,
}) => {
    return (
        <div className="page stat-page container">
            <Heading />
            <div className="row">
                <div className="col-sm-12 col-xl-6">
                    <Statistics
                        strength={strength}
                        agility={agility}
                        presence={presence}
                        toughness={toughness}
                        omens={omens}
                    />
                </div>
                <div className="col-md-5 d-none  d-xl-inline-flex ">
                    <Actions />
                </div>
            </div>
        </div>
    );
};
