import { applyMiddleware, createStore } from 'redux';

import { modifierMiddleware } from '../middleware/modifier.middleware';
import { composeWithDevTools } from 'redux-devtools-extension';
import rootReducer from '../reducers/root.reducer';

const persistedState = localStorage.getItem('reduxState')
    ? JSON.parse(localStorage.getItem('reduxState') ?? '')
    : {};

const store = createStore(
    rootReducer,
    persistedState,
    composeWithDevTools(applyMiddleware(modifierMiddleware))
);
store.subscribe(() => {
    localStorage.setItem('reduxState', JSON.stringify(store.getState()));
});
export default store;
export type RootState = ReturnType<typeof store.getState>;
