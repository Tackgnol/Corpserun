import { FC } from 'react';
import { Actions } from '../../features/Actions/Actions.container';
import { Close } from '../CloseButton/Close.component';

interface DrawerComponentProps {
    show: boolean;
    onClick: () => void;
}

export const DrawerComponent: FC<DrawerComponentProps> = ({
    show,
    onClick,
}) => {
    return (
        <div
            style={{ visibility: show ? 'visible' : 'collapse' }}
            className={`offcanvas offcanvas-end drawer__background ${
                show ? 'show' : null
            }`}
        >
            <Actions />
            <Close onClick={onClick} />
        </div>
    );
};
