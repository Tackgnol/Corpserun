import { FC } from 'react';

interface SilverComponentProps {
    amount: number;
}

export const SilverComponent: FC<SilverComponentProps> = ({ amount }) => (
    <div className="row align-middle">
        <div className="equipment-header float-start white-outline col col-5">
            Equipment
        </div>
        <div className="silver-container float-end col offset-1 col-6">
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
