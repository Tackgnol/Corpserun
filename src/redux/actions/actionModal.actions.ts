import { ModalType } from '../../models';

export interface ShowModal {
    readonly type: 'SHOW_ACTION_MODAL';
    payload: { header: string; text?: string; type: ModalType };
}

export interface HideModal {
    readonly type: 'HIDE_ACTION_MODAL';
}

export type ActionModalActions = ShowModal | HideModal;
