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
                colClassName="col offset-1 offset-md-2 col-12 col-md-11"
                textBoxClassName="description-info__top"
                onTextAreaChange={onTextAreaChange}
                onInputChange={onInputChange}
                borderClassName="description-borders__top"
            />
        </div>
    );
};
