import { FC } from 'react';

interface CloseProps {
    onClick: () => void;
    className?: string;
}

export const Close: FC<CloseProps> = ({ onClick, className }) => {
    return (
        <div
            className={`action-background button__margins ${className}`}
            onClick={onClick}
        >
            <div className="action-name yellow-outline">Close</div>
        </div>
    );
};
