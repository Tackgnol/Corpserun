import { InfoActions } from '../actions/info.actions';
import { Info } from '../../models';

const InfoReducer = (state: Info, action: InfoActions) => {
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
