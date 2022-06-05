import { DiceMode } from '../../models';

interface SetDiceMode {
    readonly type: 'SET_DICE_MODE';
    payload: DiceMode;
}

export type SettingsActions = SetDiceMode;
