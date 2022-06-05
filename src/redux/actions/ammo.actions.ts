import { AmmoState } from '../reducers/ammo.reducer';

export interface SetAmmo {
    readonly type: 'SET_AMMO';
    payload: AmmoState;
}

export interface IncreaseAmmo {
    readonly type: 'INCREASE_AMMO';
    payload: string;
}

export interface DepleteAmmo {
    readonly type: 'DEPLETE_AMMO';
    payload: string;
}

export type AmmoActions = SetAmmo | IncreaseAmmo | DepleteAmmo;
