import React, { FC } from 'react';

interface OmensComponentProps {
    count: number;
}

export const OmensComponent: FC<OmensComponentProps> = ({ count }) => {
    return (
        <div className="text-center statistic-omens__wrapper">
            <div className="row statistic-omens__font statistic-omens__count text-center">
                {count}
            </div>
            <div className="row statistic-omens__font statistic-omens__label text-center">
                Omens
            </div>
        </div>
    );
};
