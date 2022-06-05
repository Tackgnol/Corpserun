import { FC } from 'react';
import { MurderComponent } from './Murder.component';
import { useDispatch } from 'react-redux';
import { Dispatch } from 'redux';
import './Murder.css';

export const Murder: FC = () => {
    const mainDispatch = useDispatch<Dispatch>();
    const handleKill = () => {
        mainDispatch({ type: 'KILL' });
    };
    return <MurderComponent onClick={handleKill} />;
};
