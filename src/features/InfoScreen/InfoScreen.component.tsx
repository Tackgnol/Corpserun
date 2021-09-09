import React, { FC } from 'react';

import { Bottom } from './components/Bottom/Bottom.container';
import { Top } from './components/Top/Top.container';

export const InfoScreenComponent: FC = () => {
    return (
        <div className="page info-page">
            <Top />
            <Bottom />
        </div>
    );
};
