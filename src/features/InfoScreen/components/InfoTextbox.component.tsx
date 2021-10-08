import React, { ChangeEvent, FC } from 'react';
import TextareaAutosize from 'react-textarea-autosize';

export interface InfoTextboxProps {
    id: string;
    onChange: (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => void;
    tabIndex: number;
    className?: string;
    value: string | undefined;
}

export const InfoTextbox: FC<InfoTextboxProps> = ({
    id,
    tabIndex,
    value,
    className,
    onChange,
}) => {
    return (
        <TextareaAutosize
            id={id}
            className={className ?? 'description-info'}
            tabIndex={tabIndex}
            onChange={onChange}
            value={value}
        />
    );
};
