import { FC } from 'react';
import close from '../../assets/close.png';
import './Close.css';

interface CloseProps {
    onClick: () => void;
    className?: string;
}

export const Close: FC<CloseProps> = ({ onClick }) => {
    return (
        <div className="close-button top-right ">
            <img src={close} alt="close" onClick={onClick} />
        </div>
    );
};
