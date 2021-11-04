import { FC } from 'react';
import Select, { components, ValueType } from 'react-select';
import './Select.css';
import indicator from '../../assets/Select/indicator.png';
import { data } from '../../assets/gameData';
import { Option } from 'react-select/src/filters';
import { Equipment } from '../../models';
import { EquipmentActions } from '../../redux/actions/equipment.actions';
import { useDispatch } from 'react-redux';
import { Dispatch } from 'redux';

const DropdownIndicator = (props: any) => {
    return (
        <components.DropdownIndicator {...props}>
            <img src={indicator} alt="Select" />
        </components.DropdownIndicator>
    );
};

export const CustomSelect: FC = () => {
    const equipmentDispatch = useDispatch<Dispatch<EquipmentActions>>();
    const stuff = [...data.equipment, ...data.armors, ...data.weapons];
    const items: Option[] = stuff.map((e: Equipment) => ({
        value: e.name,
        label: e.name,
        data: { ...e },
    }));
    const onChange = (value: ValueType<Option, false>) => {
        equipmentDispatch({ type: 'GAIN_ITEM', payload: value?.data });
    };

    return (
        <Select
            classNamePrefix="mb_select"
            components={{ DropdownIndicator }}
            className="mb_select"
            placeholder="Add Item"
            options={items}
            onChange={onChange}
            closeMenuOnSelect={true}
            menuPlacement="top"
        />
    );
};
