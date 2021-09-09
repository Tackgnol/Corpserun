import { ChangeEvent, FC } from 'react';
import { TopComponent } from './Top.component';
import { useDispatch, useSelector } from 'react-redux';
import { AppState } from '../../../../redux/reducers/root.reducer';
import { Dispatch } from 'redux';
import { InfoActions } from '../../../../redux/actions/info.actions';

export const Top: FC = () => {
    const { name, description } = useSelector((state: AppState) => state.info);
    const infoDispatch = useDispatch<Dispatch<InfoActions>>();

    const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
        const {
            target: { value },
        } = e;
        infoDispatch({ type: 'SET_NAME', payload: value });
    };

    const handleTextAreaChange = (
        e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
    ) => {
        const {
            target: { value },
        } = e;
        infoDispatch({ type: 'SET_DESCRIPTION', payload: value });
    };

    return (
        <TopComponent
            name={name}
            description={description}
            onInputChange={handleInputChange}
            onTextAreaChange={handleTextAreaChange}
        />
    );
};
