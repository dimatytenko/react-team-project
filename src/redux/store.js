import { configureStore } from '@reduxjs/toolkit';
import {
  persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from 'redux-persist';
import storage from 'redux-persist/lib/storage';

import { authReducer } from './auth';
import { themeReducer } from './theme';
import { languageReducer } from './language';

//* config theme persist
const themePersistConfig = {
  key: 'theme',
  storage,
  whitelist: ['value'],
};

//* config language persist
const languagePersistConfig = {
  key: 'language',
  storage,
  whitelist: ['value'],
};

//* config auth persist
const authPersistConfig = {
  key: 'auth',
  storage,
  whitelist: ['token'],
};

export const store = configureStore({
  reducer: {
    auth: persistReducer(
      authPersistConfig,
      authReducer.auth
    ),
    theme: persistReducer(
      themePersistConfig,
      themeReducer.theme
    ),
    language: persistReducer(
      languagePersistConfig,
      languageReducer.language
    ),
  },
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [
          FLUSH,
          REHYDRATE,
          PAUSE,
          PERSIST,
          PURGE,
          REGISTER,
        ],
      },
    }),
  devTools: process.env.NODE_ENV === 'development',
});

export const persistor = persistStore(store);
