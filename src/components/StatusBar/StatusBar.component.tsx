import { FC } from 'react';
import close from '../../assets/close.png';

interface StatusBarComponentProps {
    wounded: boolean;
    dizzy?: boolean;
    onClick: () => void;
}

export const StatusBarComponent: FC<StatusBarComponentProps> = ({
    wounded,
    dizzy,
    onClick,
}) => {
    const closeButton = dizzy ? (
        <div className="float-start m-1 bar__close">
            <img src={close} alt="close" onClick={onClick} />
        </div>
    ) : null;
    return (
        <nav className="navbar fixed-bottom navbar-light bar__background bar__font yellow-outline">
            {closeButton}
            <span>
                {wounded ? 'You are wounded' : null}
                {wounded && dizzy ? ', ' : null}
                {dizzy ? 'You are dizzy' : null}
            </span>
        </nav>
    );
};
