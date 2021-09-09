import React from 'react';
import { StatScreenComponent } from './StatScreen.component';

import './StatScreen.css';
import { useSelector } from 'react-redux';
import { AppState } from '../../redux/reducers/root.reducer';

export const StatScreen = () => {
    const stats = useSelector((state: AppState) => state.stats);
    return <StatScreenComponent {...stats} />;
};
