import React, { FC } from 'react';
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
        <div className="stat-page">
            <Heading />
            <Statistics
                strength={strength}
                agility={agility}
                presence={presence}
                toughness={toughness}
                omens={omens}
            />
        </div>
    );
};
