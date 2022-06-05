import { FC } from 'react';

import { ReactComponent as Compatible } from '../../assets/About/CompWith_MORKBORG_vert.svg';
import './About.css';

export const About: FC = () => {
    return (
        <div className="about">
            <span>
                Created by:&nbsp;
                <a
                    href="https://adamkoscielniak.eu.org"
                    target="_blank"
                    rel="noreferrer"
                >
                    Adam Kościelniak
                </a>
            </span>
            <div className="compatible">
                <Compatible />
            </div>
        </div>
    );
};
