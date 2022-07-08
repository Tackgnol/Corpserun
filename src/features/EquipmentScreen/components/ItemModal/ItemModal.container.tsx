import { FC } from 'react';
import { ItemModalComponent } from './ItemModal.component';
import { useDispatch, useSelector } from 'react-redux';
import { AppState } from '../../../../redux/reducers/root.reducer';
import { Dispatch } from 'redux';
import { EquipmentActions } from '../../../../redux/actions/equipment.actions';
import { ModalTemplate } from '../../../../components/Modal/Modal';
import { ItemModalActions } from '../../../../redux/actions/itemModal.actions';
import { ActionModalActions } from '../../../../redux/actions/actionModal.actions';
import { useHeal } from '../../../../utils/hooks/useHeal';
import { AmmoActions } from '../../../../redux/actions/ammo.actions';
import { rollDie } from '../../../../utils/rollDie';

export const ItemModal: FC = () => {
    const { show, position, equipWhat, item } = useSelector(
        (state: AppState) => state.itemModal
    );

    const index = position ?? -1;
    let currentItem = useSelector(
        (state: AppState) => state.equipment.items[index]
    );
    if (!currentItem && item) {
        currentItem = item;
    }

    const { heal } = useHeal(currentItem);
    const itemDispatch = useDispatch<Dispatch<EquipmentActions>>();
    const modalDispatch = useDispatch<Dispatch<ItemModalActions>>();
    const actionDispatch = useDispatch<Dispatch<ActionModalActions>>();
    const ammoDispatch = useDispatch<Dispatch<AmmoActions>>();
    const consumable = currentItem?.tags.includes('consumable');
    const handleClose = () => {
        modalDispatch({ type: 'HIDE_ITEM_MODAL' });
    };

    const handleSell = () => {
        handleClose();
        itemDispatch({ type: 'SELL_ITEM', payload: index });
    };

    const handleDrop = () => {
        itemDispatch({ type: 'DROP_ITEM', payload: index });
        handleClose();
    };

    const handleEquip = () => {
        if (index !== -1) {
            if (currentItem.tags.includes('armor')) {
                itemDispatch({ type: 'EQUIP_ARMOR', payload: index });
            } else {
                itemDispatch({ type: 'EQUIP_WEAPON', payload: index });
            }
        } else {
            switch (equipWhat) {
                case 'armor':
                    itemDispatch({ type: 'UNEQUIP_ARMOR' });
                    break;
                case 'primaryWeapon':
                case 'secondaryWeapon':
                    itemDispatch({
                        type: 'UNEQUIP_WEAPON',
                        payload: equipWhat,
                    });
                    break;
            }
        }
        handleClose();
    };

    const handleUse = () => {
        const type = currentItem?.use?.type;
        let finalHeader: string = '';
        let finalText: string = '';
        switch (type) {
            case 'heal':
                const { header, text } = heal();
                finalText = text;
                finalHeader = header;
                break;
            default:
                finalHeader = 'You used your item';
                finalText = currentItem.description ?? '';
        }
        if (currentItem?.use?.effectDie && currentItem.use.effects) {
            const { effects, effectDie } = currentItem.use;
            const effectRoll = rollDie(effectDie);
            const statuses = effects[effectRoll]?.statuses;
            if (statuses) {
                statuses.forEach((s) => {});
            }
        }
        actionDispatch({
            type: 'SHOW_ACTION_MODAL',
            payload: {
                header: finalHeader,
                text: finalText,
                type: currentItem?.use?.type ?? 'item',
            },
        });
        if (currentItem.ammo?.type) {
            ammoDispatch({
                type: 'DEPLETE_AMMO',
                payload: currentItem.ammo.type,
            });
        }
        if (consumable) {
            itemDispatch({ type: 'DROP_ITEM', payload: index });
        }
        handleClose();
    };

    const isWeapon =
        currentItem?.tags.includes('weapon') ||
        currentItem?.tags.includes('shield');
    const isArmor = currentItem?.tags.includes('armor');
    const equipable = isArmor || isWeapon;
    const usable = currentItem?.tags.includes('usable');

    return (
        <ModalTemplate show={show} onClose={handleClose} type={'item'}>
            <ItemModalComponent
                item={currentItem}
                onDrop={handleDrop}
                onEquip={handleEquip}
                onSell={handleSell}
                onUse={handleUse}
                equipable={equipable}
                equiped={index === -1 && typeof equipWhat !== 'undefined'}
                usable={usable}
                consumable={consumable}
                ammoType={currentItem?.ammo?.type}
            />
        </ModalTemplate>
    );
};
