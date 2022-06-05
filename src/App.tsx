import './App.css';
import { InfoScreen } from './features/InfoScreen/InfoScreen.container';
import { StatScreen } from './features/StatsScreen/StatScreen.container';
import { EquipmentScreen } from './features/EquipmentScreen';
import { useEffect } from 'react';
import { About } from './features/About/About.component';

import { classes } from './data/classes';
import { useCharacter } from './utils/hooks/useCharacterGenerator';
import { useSelector } from 'react-redux';
import { AppState } from './redux/reducers/root.reducer';

import { Murder } from './features/Murder/Murder.container';

function App() {
    const { newCharacter } = useCharacter(classes);
    const { name } = useSelector((state: AppState) => state.info);
    useEffect(() => {
        if (!name) newCharacter();
    });

    return (
        <div className="container g-0 app ">
            <div className="row g-0">
                <div className="col-12">
                    <StatScreen />
                </div>
                <div className="col-sm-12 col-md-12 col-lg-12 col-xl-6">
                    <InfoScreen />
                </div>
                <div className="col-sm-12 col-md-12 col-lg-12 col-xl-6 h-auto">
                    <EquipmentScreen />
                </div>
            </div>{' '}
            <div className="row g-0">
                <Murder />
            </div>
            <div className="row g-0">
                <About />
            </div>
        </div>
    );
}

export default App;
