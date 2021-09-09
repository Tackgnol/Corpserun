import { Health } from '../../models';

export interface TakeDamage {
    readonly type: 'TAKE_DAMAGE';
}

export interface HealDamage {
    readonly type: 'HEAL_DAMAGE';
}

export interface SetHealth {
    readonly type: 'SET_HEALTH';
    payload: Health;
}

export type HPActions = TakeDamage | HealDamage | SetHealth;
