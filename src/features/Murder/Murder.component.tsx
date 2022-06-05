import { FC } from 'react';

interface MurderComponentProps {
    onClick: () => void;
}

export const MurderComponent: FC<MurderComponentProps> = ({ onClick }) => {
    return (
        <div className="murder-background">
            <span className="murder-text" onClick={onClick}>
                Kill this one!
            </span>
        </div>
    );
};
