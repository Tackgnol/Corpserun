import React, { ChangeEvent, FC } from 'react';
import './InfoInput.css';

export interface InfoInputProps {
    id: string;
    onChange: (e: ChangeEvent<HTMLInputElement>) => void;
    tabIndex: number;
    value: string | undefined;
}

export const InfoInput: FC<InfoInputProps> = ({
    id,
    tabIndex,
    value,
    onChange,
}) => {
    return (
        <input
            id={id}
            type="text"
            tabIndex={tabIndex}
            value={value}
            onChange={onChange}
            className="description-name"
        />
    );
};
