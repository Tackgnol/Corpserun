import React, { ChangeEvent, FC } from 'react';
import { formatModifier, getModifier } from '../../../../utils/modifiers';

export interface StatisticInputProps {
    value: number;
    onChange: (e: ChangeEvent<HTMLInputElement>) => void;
    showModifier?: boolean;
}

export const StatisticsInput: FC<StatisticInputProps> = ({
    value,
    onChange,
    showModifier = true,
}) => {
    const modifier = showModifier ? (
        <div className="statistic-modifier">
            {formatModifier(getModifier(value))}
        </div>
    ) : null;
    return (
        <div className="col col-4 col-md-3 col-lg-2 col-xl-3 d-flex justify-content-center statistic-input__background">
            <input
                className="statistic-input text-center"
                type="number"
                value={value}
                onChange={onChange}
            />
            {modifier}
        </div>
    );
};
