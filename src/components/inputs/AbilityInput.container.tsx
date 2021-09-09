import React, { FC } from 'react';
import { useSelector } from 'react-redux';
import { AppState } from '../../redux/reducers/root.reducer';

interface AbilityInputContainerProps {
    id: string;
    tabIndex: number;
}

export const AbilityInputContainer: FC<AbilityInputContainerProps> = ({
    id,
    tabIndex,
}) => {
    const { abilities } = useSelector((state: AppState) => state.info);

    return null;
};
