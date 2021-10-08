import { InfoActions } from '../actions/info.actions';
import { Info } from '../../models';
import { generateAbilities } from '../../classes/utils';

const initialState: Info = {
    description: '',
    name: '',
    abilities: [],
};

const InfoReducer = (state = initialState, action: InfoActions) => {
    switch (action.type) {
        case 'SET_NAME':
            return {
                ...state,
                name: action.payload,
            };
        case 'SET_DESCRIPTION':
            return {
                ...state,
                description: action.payload,
            };
        case 'SET_ABILITIES':
            return {
                ...state,
                abilities: action.payload,
                abilitiesString: generateAbilities(action.payload ?? []),
            };
        case 'EDIT_ABILITIES':
            return {
                ...state,
                abilitiesString: action.payload,
            };
        case 'SET_CLASS_NAME':
            return {
                ...state,
                characterClass: action.payload,
            };
        default:
            return { ...state };
    }
};

export default InfoReducer;
