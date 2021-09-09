import React, { FC } from 'react';
import Select, { ValueType } from 'react-select';
import { OptionType } from '../../models';

interface EquipmentInputComponentProps {
    id: string;
    tabIndex: number;
    onEquip: (item: ValueType<OptionType, false>) => void;
    options: { value: string; label: string }[];
}

export const EquipmentInputComponent: FC<EquipmentInputComponentProps> = ({
    id,
    tabIndex,
    onEquip,
    options,
}) => {
    return (
        <div tabIndex={tabIndex}>
            <Select id={id} options={options} onChange={onEquip} />
        </div>
    );
};
