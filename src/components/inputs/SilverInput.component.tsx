import React, { ChangeEvent, FC } from 'react';

interface SilverInputComponentProps {
    id: string;
    tabIndex: number;
    value: number;
    onChange: (e: ChangeEvent<HTMLInputElement>) => void;
}

export const SilverInputComponent: FC<SilverInputComponentProps> = ({
    id,
    tabIndex,
    value,
    onChange,
}) => {
    return (
        <input
            id={id}
            type="number"
            tabIndex={tabIndex}
            onChange={onChange}
            value={value}
        />
    );
};
