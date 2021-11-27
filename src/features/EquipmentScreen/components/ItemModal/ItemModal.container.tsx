import { FC } from 'react';
import { ItemModalComponent } from './ItemModal.component';
import { useDispatch, useSelector } from 'react-redux';
import { AppState } from '../../../../redux/reducers/root.reducer';
import { Dispatch } from 'redux';
import { EquipmentActions } from '../../../../redux/actions/equipment.actions';
import { ModalTemplate } from '../../../../components/Modal/Modal';
import { ItemModalActions } from '../../../../redux/actions/itemModal.actions';
import { ModalType } from '../../../../models';

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
    const itemDispatch = useDispatch<Dispatch<EquipmentActions>>();
    const modalDispatch = useDispatch<Dispatch<ItemModalActions>>();

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

    const isWeapon =
        currentItem?.tags.includes('weapon') ||
        currentItem?.tags.includes('shield');
    const isArmor = currentItem?.tags.includes('armor');
    const equipable = isArmor || isWeapon;
    return (
        <ModalTemplate show={show} onClose={handleClose} type={ModalType.item}>
            <ItemModalComponent
                item={currentItem}
                onDrop={handleDrop}
                onEquip={handleEquip}
                onSell={handleSell}
                equipable={equipable}
                equiped={index === -1 && typeof equipWhat !== 'undefined'}
            />
        </ModalTemplate>
    );
};
