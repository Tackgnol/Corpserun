export interface ShowDrawer {
    readonly type: 'SHOW_DRAWER';
}

export interface HideDrawer {
    readonly type: 'HIDE_DRAWER';
}

export type DrawerActions = ShowDrawer | HideDrawer;
