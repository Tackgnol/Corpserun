import { CharacterTemplate } from '../../models';
import { useDispatch } from 'react-redux';
import { Dispatch } from 'redux';
import { StatActions } from '../../redux/actions/stat.actions';
import { InfoActions } from '../../redux/actions/info.actions';
import { HPActions } from '../../redux/actions/hp.actions';
import { EquipmentActions } from '../../redux/actions/equipment.actions';
import { PetActions } from '../../redux/actions/pet.actions';
import { AmmoActions } from '../../redux/actions/ammo.actions';
import { rollOnTable } from '../rollOnTable';
import { GenerateCharacter } from '../../classes/GenerateCharacter';

export interface UseCharacter {
    newCharacter: () => void;
    killCharacter: () => void;
}

export const useCharacter = (templates: CharacterTemplate[]): UseCharacter => {
    const mainDispatch = useDispatch<Dispatch>();
    const statDispatch = useDispatch<Dispatch<StatActions>>();
    const infoDispatch = useDispatch<Dispatch<InfoActions>>();
    const hpDispatch = useDispatch<Dispatch<HPActions>>();
    const equipmentDispatch = useDispatch<Dispatch<EquipmentActions>>();
    const petDispatch = useDispatch<Dispatch<PetActions>>();
    const ammoDispatch = useDispatch<Dispatch<AmmoActions>>();
    const template = rollOnTable(templates);
    const newCharacter = () => {
        if (template) {
            const generator = new GenerateCharacter(template);
            const character = generator.generate();
            statDispatch({ type: 'SET_STAT', payload: character.stats });
            infoDispatch({ type: 'SET_NAME', payload: character.info.name });
            infoDispatch({
                type: 'SET_DESCRIPTION',
                payload: `${character.info.description} ${
                    character.info.classDescription ?? ''
                }`,
            });
            infoDispatch({
                type: 'SET_ABILITIES',
                payload: character.abilities ?? [],
            });
            infoDispatch({
                type: 'SET_CLASS_NAME',
                payload: character.info.characterClass ?? '',
            });
            hpDispatch({
                type: 'SET_HEALTH',
                payload: {
                    currHP: character.stats.maxHP,
                    wounded: false,
                    dead: false,
                },
            });
            let { equipment } = character;
            equipmentDispatch({ type: 'SET_ITEMS', payload: equipment });
            equipmentDispatch({
                type: 'UPDATE_SILVER',
                payload: character.silver,
            });
            if (character.pets.length) {
                character.pets.forEach((p) => {
                    petDispatch({
                        type: 'GAIN_PET',
                        payload: {
                            name: p.name,
                            actionType: p.actionType,
                            actionDie: p.actionDie,
                            hp: p.hp,
                            description: p.description,
                            buff: p.buff,
                        },
                    });
                });
            }
            if (character.ammo) {
                ammoDispatch({ type: 'SET_AMMO', payload: character.ammo });
            }
            const weapons = equipment
                .filter((e) => e.tags.includes('weapon'))
                .slice(0, 2);
            weapons.forEach((weapon) => {
                const weaponIndex = equipment.findIndex(
                    (e) => e.name === weapon.name
                );
                equipmentDispatch({
                    type: 'EQUIP_WEAPON',
                    payload: weaponIndex,
                });
                equipment.splice(weaponIndex, 1);
            });

            const armor = equipment.findIndex((e) => e.tags.includes('armor'));

            if (armor !== -1) {
                equipmentDispatch({ type: 'EQUIP_ARMOR', payload: armor });
                equipment.splice(armor, 1);
            }
        }
    };
    const killCharacter = () => {
        mainDispatch({ type: 'KILL' });
    };
    return { newCharacter, killCharacter };
};
