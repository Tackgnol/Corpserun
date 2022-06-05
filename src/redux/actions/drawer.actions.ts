export interface ShowActionDrawer {
    readonly type: 'SHOW_ACTION_DRAWER';
}

export interface HideActionDrawer {
    readonly type: 'HIDE_ACTION_DRAWER';
}

export type DrawerActions = ShowActionDrawer | HideActionDrawer;
