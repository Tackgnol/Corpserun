import { FC, ChangeEvent } from 'react';
import { BottomComponent } from './Bottom.component';
import { useDispatch, useSelector } from 'react-redux';
import { AppState } from '../../../../redux/reducers/root.reducer';
import { Dispatch } from 'redux';
import { InfoActions } from '../../../../redux/actions/info.actions';

export const Bottom: FC = () => {
    const { abilitiesString, classDescription, characterClass } = useSelector(
        (state: AppState) => state.info
    );
    const infoDispatch = useDispatch<Dispatch<InfoActions>>();

    const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
        const {
            target: { value },
        } = e;
        infoDispatch({ type: 'SET_CLASS_NAME', payload: value });
    };

    const handleTextAreaChange = (
        e: ChangeEvent<HTMLTextAreaElement | HTMLInputElement>
    ) => {
        const {
            target: { value },
        } = e;
        infoDispatch({ type: 'EDIT_ABILITIES', payload: value });
    };

    return (
        <BottomComponent
            characterClass={characterClass}
            abilities={abilitiesString ?? ''}
            classDescription={classDescription ?? ''}
            onInputChange={handleInputChange}
            onTextAreaChange={handleTextAreaChange}
        />
    );
};
