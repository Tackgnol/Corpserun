import { FC } from 'react';
import { Pet as PetModel } from '../../../../models';
import { PetComponent } from './Pet.component';
import { useDispatch } from 'react-redux';
import { Dispatch } from 'redux';
import { PetActions } from '../../../../redux/actions/pet.actions';
import { useAttack } from '../../../../utils/hooks/useAttack';
import { ActionModalActions } from '../../../../redux/actions/actionModal.actions';

interface PetProps {
    index: number;
    pet: PetModel;
}

export const Pet: FC<PetProps> = ({ index, pet }) => {
    const actionModalDispatch = useDispatch<Dispatch<ActionModalActions>>();
    const petDispatch = useDispatch<Dispatch<PetActions>>();
    const { attack } = useAttack();
    const handleKill = () => {
        petDispatch({ type: 'LOSE_PET', payload: index });
    };
    const handleHeal = () => {
        petDispatch({ type: 'HEAL_PET', payload: index });
    };
    const handleDamage = () => {
        petDispatch({ type: 'HURT_PET', payload: index });
    };
    const handleUse = () => {
        let header: string = '',
            text: string = '';
        if (pet.actionType !== 'buff') {
            ({ header, text } = attack(pet.actionDie, pet.actionType));
        } else {
            const { buff } = pet;
            if (buff) {
                // ({ header, text } = applyStatus(buff));
            }
        }
        actionModalDispatch({
            type: 'SHOW_ACTION_MODAL',
            payload: {
                header,
                text,
                type: pet.actionType,
                statistic: pet.mod,
                burn: false,
            },
        });
    };
    return (
        <PetComponent
            name={pet.name}
            description={pet.description ?? ''}
            hp={pet.hp}
            onHeal={handleHeal}
            onDamage={handleDamage}
            onKill={handleKill}
            onUse={handleUse}
            type={pet.actionType}
        />
    );
};
