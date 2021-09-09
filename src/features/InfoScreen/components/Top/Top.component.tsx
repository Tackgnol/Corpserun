import React, { ChangeEvent, FC } from 'react';
import { DescriptionComponent } from '../Description/Description.component';

interface TopComponentProps {
    name: string;
    description: string;
    onInputChange: (e: ChangeEvent<HTMLInputElement>) => void;
    onTextAreaChange: (
        e: ChangeEvent<HTMLTextAreaElement | HTMLInputElement>
    ) => void;
}

export const TopComponent: FC<TopComponentProps> = ({
    name,
    description,
    onInputChange,
    onTextAreaChange,
}) => {
    return (
        <div className="info-top">
            <DescriptionComponent
                inputValue={name}
                textBoxValue={description}
                colClassName="col offset-1 col-12"
                textBoxClassName="description-info__top"
                onTextAreaChange={onTextAreaChange}
                onInputChange={onInputChange}
            />
        </div>
    );
};
