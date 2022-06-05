import { ChangeEvent, FC } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Dispatch } from 'redux';
import { AmmoActions } from '../../redux/actions/ammo.actions';
import { AppState } from '../../redux/reducers/root.reducer';
import { AmmoInputComponent } from './AmmoInput.component';

interface AmmoInputProps {
    ammoType: string;
}

export const AmmoInput: FC<AmmoInputProps> = ({ ammoType }) => {
    const ammoDispatch = useDispatch<Dispatch<AmmoActions>>();
    const ammo = useSelector((state: AppState) => state.ammo);
    const currentAmmo = ammo[ammoType];
    const handleEdit = (e: ChangeEvent<HTMLInputElement>) => {
        const {
            target: { value },
        } = e;
        ammoDispatch({ type: 'SET_AMMO', payload: { [ammoType]: +value } });
    };
    const handleAdd = () => {
        ammoDispatch({ type: 'INCREASE_AMMO', payload: ammoType });
    };
    const handleSubtract = () => {
        ammoDispatch({ type: 'DEPLETE_AMMO', payload: ammoType });
    };
    return ammoType === 'Infinite' ? null : (
        <AmmoInputComponent
            onChange={handleEdit}
            amount={currentAmmo ?? 0}
            onSubtract={handleSubtract}
            onAdd={handleAdd}
        />
    );
};
