import React, { FC } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { ValueType } from 'react-select';
import { EquipmentComponent } from '../Equipment.component';
import { Dispatch } from 'redux';
import { EquipmentActions } from '../../redux/actions/equipment.actions';
import { AppState } from '../../redux/reducers/root.reducer';
import { OptionType } from '../../models';
import { data } from '../../assets/gameData';
import { EquipmentInputComponent } from './EquipmentInput.component';

interface EquipmentInputContainerProps {
    equipmentSlot: number;
    id: string;
    tabIndex: number;
}

export const EquipmentInputContainer: FC<EquipmentInputContainerProps> = ({
    equipmentSlot,
    id,
    tabIndex,
}) => {
    const { equipment, weapons, armors } = data;
    const equipable = [...equipment, ...weapons, ...armors];
    const {
        equipment: { items, primaryWeapon, secondaryWeapon, armor },
    } = useSelector((state: AppState) => state);
    const dispatchEquipment = useDispatch<Dispatch<EquipmentActions>>();
    const item = items[equipmentSlot];

    const handleSell = () => {
        dispatchEquipment({ type: 'SELL_ITEM', payload: equipmentSlot });
    };
    const handleEquip = () => {
        if (item.tags.includes('weapon')) {
            if (!primaryWeapon) {
                dispatchEquipment({
                    type: 'EQUIP_PRIMARY',
                    payload: equipmentSlot,
                });
            } else if (!secondaryWeapon) {
                dispatchEquipment({
                    type: 'EQUIP_SECONDARY',
                    payload: equipmentSlot,
                });
            }
        }
        if (item.tags.includes('armor') && !armor) {
            dispatchEquipment({ type: 'EQUIP_ARMOR', payload: equipmentSlot });
        }
        if (item.tags.includes('scroll')) {
            dispatchEquipment({ type: 'EQUIP_SCROLL', payload: equipmentSlot });
        }
    };

    const handleDrop = () => {
        dispatchEquipment({ type: 'DROP_ITEM', payload: equipmentSlot });
    };
    const handleGain = (selectedOption: ValueType<OptionType, false>) => {
        const val = selectedOption?.value;
        if (val) {
            const item = equipable.find((i) => i.name === val);
            if (item) {
                dispatchEquipment({ type: 'GAIN_ITEM', payload: item });
            }
        }
    };
    if (items.length < equipmentSlot) {
        return null;
    }
    if (!item) {
        const options = equipable.map((e) => ({
            value: e.name,
            label: e.name,
        }));
        return (
            <EquipmentInputComponent
                id={id}
                tabIndex={tabIndex}
                onEquip={handleGain}
                options={options}
            />
        );
    }
    return (
        <EquipmentComponent
            id={id}
            item={item}
            onSell={handleSell}
            onDrop={handleDrop}
            onEquip={handleEquip}
        />
    );
};
