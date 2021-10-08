import React, { ChangeEvent, FC } from 'react';
import { formatModifier, getModifier } from '../../../../utils/modifiers';

export interface StatisticInputProps {
    value: number;
    onChange: (e: ChangeEvent<HTMLInputElement>) => void;
}

export const StatisticsInput: FC<StatisticInputProps> = ({
    value,
    onChange,
}) => {
    return (
        <div className="col col-4 col-xl-3 d-flex justify-content-center statistic-input__background">
            <input
                className="statistic-input text-center"
                type="number"
                value={value}
                onChange={onChange}
            />
            <div className="statistic-modifier">
                {formatModifier(getModifier(value))}
            </div>
        </div>
    );
};
