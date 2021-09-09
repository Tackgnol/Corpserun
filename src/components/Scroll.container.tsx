import React, { FC } from 'react';
import { useSelector } from 'react-redux';
import { AppState } from '../redux/reducers/root.reducer';
import { ScrollComponent } from './Scroll.component';

interface ScrollContainerProps {
    id: string;
    scrollPos: number;
}

export const ScrollContainer: FC<ScrollContainerProps> = ({
    id,
    scrollPos,
}) => {
    const { scrolls } = useSelector((state: AppState) => state.equipment);
    const scroll = scrolls[scrollPos];

    if (scroll) {
        return <ScrollComponent id={id} scroll={scroll} />;
    }
    return null;
};
