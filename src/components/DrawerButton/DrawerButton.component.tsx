import { FC } from 'react';
import button from '../../assets/Button.png';

interface DrawerButtonComponentProps {
    onClick: () => void;
}

export const DrawerButtonComponent: FC<DrawerButtonComponentProps> = ({ onClick }) => (
    <div className="position-fixed bottom-0 end-0" style={{ zIndex: 999 }}>
        <img
            className="float-end"
            src={button}
            alt="open drawer"
            onClick={onClick}
        />
    </div>
);
