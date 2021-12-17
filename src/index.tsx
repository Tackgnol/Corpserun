import 'bootstrap/dist/css/bootstrap.css';
import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import reportWebVitals from './reportWebVitals';
import store from './redux/store/store';
import { Provider } from 'react-redux';
import { StatusBar } from './components/StatusBar/StatusBar.container';
import { DrawerButton } from './components/DrawerButton/DrawerButton.container';
import { Drawer } from './components/Drawer/Drawer.container';

ReactDOM.render(
    <React.StrictMode>
        <Provider store={store}>
            <Drawer />
            <DrawerButton />
            <StatusBar />
            <App />
        </Provider>
    </React.StrictMode>,
    document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
