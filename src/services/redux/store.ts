import { combineReducers, configureStore } from '@reduxjs/toolkit';
import square from './slices/squareSlice';
import nft from './slices/nftSlice';
import storage from 'redux-persist/lib/storage';
import { persistReducer, persistStore } from 'redux-persist';
import thunk from 'redux-thunk';

const persistConfig = {
  key: 'root',
  storage,
}

const rootReducer = combineReducers({
  square,
  nft
});

const persistedReducer = persistReducer(persistConfig, rootReducer);

export const store = configureStore({
  reducer: persistedReducer,
  middleware: [thunk]
})

export const persister = persistStore(store);
