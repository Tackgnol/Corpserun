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
                    classDescription ? classDescription + '\n' : ''
                }${abilities}`}
                colClassName="col offset-3 col-8"
                onInputChange={onInputChange}
                onTextAreaChange={onTextAreaChange}
                textBoxClassName="description-info__bot"
            />
        </div>
    );
};
