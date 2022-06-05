import { AmmoActions } from '../actions/ammo.actions';

export type AmmoState = { [name: string]: number | undefined };

const initialState = {
    Arrow: undefined,
    Bolt: undefined,
    Oil: undefined,
    Stone: undefined,
    Torch: undefined,
};
const AmmoReducer = (state: AmmoState = initialState, action: AmmoActions) => {
    let value: undefined | number;
    switch (action.type) {
        case 'SET_AMMO':
            return { ...state, ...action.payload };
        case 'INCREASE_AMMO':
            value = state[action.payload] ?? 0;
            return { ...state, [action.payload]: value + 1 };
        case 'DEPLETE_AMMO':
            value = state[action.payload];
            return {
                ...state,
                [action.payload]: value === undefined ? undefined : value - 1,
            };
        default:
            return state;
    }
};
export default AmmoReducer;
