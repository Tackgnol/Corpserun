import React, { ChangeEvent, FC } from 'react';
import { DescriptionComponent } from '../Description/Description.component';

interface BottomComponentProps {
    classDescription: string;
    abilities: string;
    characterClass?: string;
    onInputChange: (e: ChangeEvent<HTMLInputElement>) => void;
    onTextAreaChange: (
        e: ChangeEvent<HTMLTextAreaElement | HTMLInputElement>
    ) => void;
}

export const BottomComponent: FC<BottomComponentProps> = ({
    classDescription,
    abilities,
    characterClass,
    onInputChange,
    onTextAreaChange,
}) => {
    return (
        <div className="info-bottom">
            <DescriptionComponent
                inputValue={characterClass ?? ''}
                textBoxValue={`${
                    classDescription ? classDescription + `\n` : ''
                }${abilities}`}
                colClassName="col offset-3 offset-sm-4 offset-md-4 col-8 col-md-7"
                onInputChange={onInputChange}
                onTextAreaChange={onTextAreaChange}
                textBoxClassName="description-info__bot mt-md-4"
                borderClassName="description-borders__bot"
            />
        </div>
    );
};
