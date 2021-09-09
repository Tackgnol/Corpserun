import React, { ChangeEvent, FC } from 'react';

import { useDispatch, useSelector } from 'react-redux';
import { AppState } from '../../../../redux/reducers/root.reducer';
import { InfoActions } from '../../../../redux/actions/info.actions';
import { Dispatch } from 'redux';
import { InfoInput } from './InfoInput.component';
import { InfoTextbox } from '../InfoTextbox.component';
import { Info } from '../../../../models';

export interface InfoInputContainerProps {
    id: string;
    tabIndex: number;
    field: keyof Info;
}

export const InfoInputContainer: FC<InfoInputContainerProps> = ({
    id,
    tabIndex,
    field,
}) => {
    const { info } = useSelector((state: AppState) => state);
    const value = info[field];
    const infoDispatch = useDispatch<Dispatch<InfoActions>>();
    const handleChange = (
        e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
    ) => {
        const value = e.target.value;
        switch (field) {
            case 'name':
                infoDispatch({ type: 'SET_NAME', payload: value });
                break;
            case 'description':
                infoDispatch({ type: 'SET_DESCRIPTION', payload: value });
                break;
        }
    };
    if (field === 'name') {
        return (
            <InfoInput
                id={id}
                onChange={handleChange}
                tabIndex={tabIndex}
                value={value}
            />
        );
    } else {
        return (
            <InfoTextbox
                id={id}
                onChange={handleChange}
                tabIndex={tabIndex}
                value={value}
            />
        );
    }
};
