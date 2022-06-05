import { FC } from 'react';
import { Tab, TabList, TabPanel, Tabs } from 'react-tabs';

import { Actions } from '../../features/Actions/Actions.container';
import { Close } from '../CloseButton/Close.component';
import { Pets } from '../../features/Pets/Pets.container';

import 'react-tabs/style/react-tabs.css';

interface DrawerComponentProps {
    show: boolean;
    onClick: () => void;
}

export const DrawerComponent: FC<DrawerComponentProps> = ({
    show,
    onClick,
}) => {
    return (
        <div
            style={{ visibility: show ? 'visible' : 'collapse' }}
            className={`offcanvas offcanvas-end drawer-background ${
                show ? 'show' : null
            }`}
        >
            <Tabs>
                <TabList>
                    <Tab>
                        <span className="tab__text">Actions</span>
                    </Tab>
                    <Tab>
                        <span className="tab__text">Pets</span>
                    </Tab>
                </TabList>

                <TabPanel>
                    <Actions />
                </TabPanel>
                <TabPanel>
                    <Pets />
                </TabPanel>
            </Tabs>
            <Close onClick={onClick} />
        </div>
    );
};
