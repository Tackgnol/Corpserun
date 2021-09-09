import React, { FC } from 'react';

export interface HPInputProps {
    id: string;
    hp: number;
    wounded: boolean;
    dead: boolean;
    className?: string;
}

export const HPInput: FC<HPInputProps> = ({
    id,
    hp,
    className,
    wounded,
    dead,
}) => {
    const inputStyle =
        dead || wounded
            ? dead
                ? { color: 'gray' }
                : wounded
                ? { color: 'red' }
                : undefined
            : undefined;
    return (
        <input
            id={id}
            type="text"
            className={className}
            value={hp}
            disabled={true}
            style={inputStyle}
        />
    );
};
