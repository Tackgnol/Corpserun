import { EquipableType, Equipment } from '../../models';

export interface ShowModal {
    readonly type: 'SHOW_ITEM_MODAL';
    payload: { position?: number; equipWhat?: EquipableType; item?: Equipment };
}

export interface HideModal {
    readonly type: 'HIDE_ITEM_MODAL';
}

export type ItemModalActions = ShowModal | HideModal;
