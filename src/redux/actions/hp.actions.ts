import { Health } from '../../models';

export interface TakeDamage {
    readonly type: 'TAKE_DAMAGE';
}

export interface HealDamage {
    readonly type: 'HEAL_DAMAGE';
    payload?: number;
}

export interface SetHealth {
    readonly type: 'SET_HEALTH';
    payload: Health;
}

export interface SetDizzy {
    readonly type: 'SET_DIZZY';
    payload: boolean;
}

export type HPActions = TakeDamage | HealDamage | SetHealth | SetDizzy;
