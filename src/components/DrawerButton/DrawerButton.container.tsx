import { Dispatch, FC } from 'react';
import { DrawerButtonComponent } from './DrawerButton.component';
import { useDispatch } from 'react-redux';
import { DrawerActions } from '../../redux/actions/drawer.actions';

export const DrawerButton: FC = () => {
    const drawerDispatch = useDispatch<Dispatch<DrawerActions>>();
    const handleOpen = () => {
        drawerDispatch({ type: 'SHOW_ACTION_DRAWER' });
    };
    return <DrawerButtonComponent onClick={handleOpen} />;
};
