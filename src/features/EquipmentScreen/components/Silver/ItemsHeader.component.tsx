import { ChangeEvent, FC } from 'react';

interface ItemsHeaderComponentProps {
    amount: number;
    onChange: (e: ChangeEvent<HTMLInputElement>) => void;
    maxLoad: number;
    currLoad: number;
}

export const ItemsHeaderComponent: FC<ItemsHeaderComponentProps> = ({
    amount,
    onChange,
    maxLoad,
    currLoad,
}) => (
    <div className="row align-middle m-1">
        <div className="equipment-header float-start white-outline col-md-5 col-sm-4">
            Equipment
        </div>
        <div className="load float-start white-outline col-md-3 col-sm-2">
            Load: {currLoad}/{maxLoad}
        </div>
        <div className="silver-container float-end  col-md-4 col-sm-5">
            <span className="silver-header align-self-auto white-outline float-start">
                Silver
            </span>
            <div className="silver-background float-end">
                <input
                    className="silver-input align-self-center"
                    value={amount}
                    onChange={onChange}
                />
            </div>
        </div>
    </div>
);
