import { FC } from 'react';

interface SilverComponentProps {
    amount: number;
}

export const SilverComponent: FC<SilverComponentProps> = ({ amount }) => (
    <div className="row align-middle m-1">
        <div className="equipment-header float-start white-outline col-md-5 col-sm-4">
            Equipment
        </div>
        <div className="silver-container float-end offset-md-3 offset-sm-0 col-md-4 col-sm-5">
            <span className="silver-header align-self-auto white-outline float-start">
                Silver
            </span>
            <div className="silver-background float-end">
                <input
                    className="silver-input align-self-center"
                    value={amount}
                />
            </div>
        </div>
    </div>
);
