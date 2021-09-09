import React, { FC } from 'react';
import { SkullComponent } from './Skull.component';

export const Heading: FC = () => {
    return <SkullComponent maxHP={11} currHP={9} />;
};
