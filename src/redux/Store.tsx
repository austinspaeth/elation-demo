// REDUX STORE //
import { createStore, applyMiddleware } from "redux";
import reduxThunk from 'redux-thunk';
import rootReducer from "./Reducers";
import { persistCombineReducers, persistStore } from 'redux-persist';
import storage from 'redux-persist/es/storage';

const persistConfig = {
    key: 'visibledocs::',
    storage,
    whitelist: ["theme"]
};

const persistedReducer = persistCombineReducers(persistConfig, rootReducer);
const store = createStore(persistedReducer, applyMiddleware(reduxThunk));
export const persistor = persistStore(store);

export default () => {
    return { persistor, store };
};