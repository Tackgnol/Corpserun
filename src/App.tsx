import './App.css';
import { InfoScreen } from './features/InfoScreen/InfoScreen.container';
import { useDispatch } from 'react-redux';
import { Dispatch } from 'redux';
import { StatActions } from './redux/actions/stat.actions';
import { InfoActions } from './redux/actions/info.actions';
import { EquipmentActions } from './redux/actions/equipment.actions';
import { rollOnTable } from './utils/rollOnTable';
import { classes } from './data/classes';
import { GenerateCharacter } from './classes/GenerateCharacter';
import { StatScreen } from './features/StatsScreen/StatScreen.container';

function App() {
    const statDispatch = useDispatch<Dispatch<StatActions>>();
    const infoDispatch = useDispatch<Dispatch<InfoActions>>();
    const equipmentDispatch = useDispatch<Dispatch<EquipmentActions>>();
    const template = rollOnTable(classes);
    if (template) {
        const generator = new GenerateCharacter(template);
        const character = generator.generate();
        statDispatch({ type: 'SET_STAT', payload: character.stats });
        infoDispatch({ type: 'SET_NAME', payload: character.info.name });
        infoDispatch({
            type: 'SET_DESCRIPTION',
            payload: `${character.info.description} ${
                character.info.classDescription ?? ''
            }`,
        });
        infoDispatch({
            type: 'SET_ABILITIES',
            payload: character.abilities ?? '',
        });
        infoDispatch({
            type: 'SET_CLASS_NAME',
            payload: character.info.characterClass ?? '',
        });
        const { equipment } = character;
        equipmentDispatch({ type: 'SET_ITEMS', payload: equipment });
        equipmentDispatch({
            type: 'UPDATE_SILVER',
            payload: character.silver,
        });
    }

    return (
        <div className="page">
            <div className="row g-0">
                <div className="col col-sm-12 col-md-6">
                    <StatScreen />
                </div>
                <div className="col col-sm-12 col-md-6">
                    <InfoScreen />
                </div>
            </div>
        </div>
    );
}

export default App;
