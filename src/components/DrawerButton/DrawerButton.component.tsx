import { FC } from 'react';
import button from '../../assets/Button.png';

interface DrawerButtonComponentProps {
    onClick: () => void;
}

export const DrawerButtonComponent: FC<DrawerButtonComponentProps> = ({
    onClick,
}) => (
    <div className="fixed-bottom d-md-none">
        <img
            className="float-end"
            src={button}
            alt="open drawer"
            onClick={onClick}
        />
    </div>
);
