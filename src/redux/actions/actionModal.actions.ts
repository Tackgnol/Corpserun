export interface ShowModal {
    readonly type: 'SHOW_ACTION_MODAL';
    payload: { header: string; damageText?: string };
}

export interface HideModal {
    readonly type: 'HIDE_ACTION_MODAL';
}

export type ActionModalActions = ShowModal | HideModal;
