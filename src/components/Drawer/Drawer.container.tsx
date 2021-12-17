import { Dispatch, FC } from 'react';
import { DrawerComponent } from './Drawer.component';
import { useDispatch, useSelector } from 'react-redux';
import { AppState } from '../../redux/reducers/root.reducer';
import { DrawerActions } from '../../redux/actions/drawer.actions';
import './Drawer.css';

export const Drawer: FC = () => {
    const { show } = useSelector((state: AppState) => state.drawer);
    const drawerDispatch = useDispatch<Dispatch<DrawerActions>>();
    const handleClose = () => {
        drawerDispatch({ type: 'HIDE_DRAWER' });
    };
    return <DrawerComponent show={show} onClick={handleClose} />;
};
