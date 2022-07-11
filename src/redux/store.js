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

import { usersApi } from './users/usersSlice';
import { themeReducer } from './theme';
import { authReducer } from './auth';

//* config theme persist
const themePersistConfig = {
  key: 'theme',
  storage,
  whitelist: ['value'],
};

export const store = configureStore({
  reducer: {
    auth: authReducer.auth,
    theme: persistReducer(
      themePersistConfig,
      themeReducer.theme
    ),
    [usersApi.reducerPath]: usersApi.reducer,
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
    }).concat(usersApi.middleware),
  devTools: process.env.NODE_ENV === 'development',
});

export const persistor = persistStore(store);
