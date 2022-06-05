import React, { ChangeEvent, FC } from 'react';
import { InfoInput } from '../InfoInput/InfoInput.component';

import './Desctipion.css';
import { InfoTextbox } from '../InfoTextbox.component';

interface DescriptionComponentProps {
    inputValue: string;
    textBoxValue: string;
    colClassName: string;
    textBoxClassName: string;
    borderClassName: string;
    onInputChange: (e: ChangeEvent<HTMLInputElement>) => void;
    onTextAreaChange: (
        e: ChangeEvent<HTMLTextAreaElement | HTMLInputElement>
    ) => void;
}

export const DescriptionComponent: FC<DescriptionComponentProps> = ({
    inputValue,
    textBoxValue,
    colClassName,
    textBoxClassName,
    borderClassName,
    onTextAreaChange,
    onInputChange,
}) => {
    return (
        <div className="description-main align-items-center">
            <div className="row">
                <div className={`${colClassName}`}>
                    <InfoInput
                        id="x"
                        onChange={onInputChange}
                        tabIndex={1}
                        value={inputValue}
                    />
                </div>
            </div>
            <br />
            <div className={`mt-4 ${borderClassName}`}>
                <div className={colClassName}>
                    <InfoTextbox
                        id="x"
                        onChange={onTextAreaChange}
                        tabIndex={3}
                        value={textBoxValue}
                        className={textBoxClassName}
                    />
                </div>
            </div>
        </div>
    );
};
