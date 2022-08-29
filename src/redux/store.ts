import {createStore} from 'redux';
import {rootReducer} from './reducer';
import {persistReducer, persistStore} from 'redux-persist';
import storage from 'redux-persist/lib/storage';

const persistedReducer = persistReducer({key: 'root', storage}, rootReducer);
export const store = createStore(
    persistedReducer,
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);
export const persister = persistStore(store);
