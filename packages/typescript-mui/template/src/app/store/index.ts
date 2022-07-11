import { combineReducers, configureStore } from '@reduxjs/toolkit';
import logger from 'redux-logger';
import { CurriedGetDefaultMiddleware } from '@reduxjs/toolkit/dist/getDefaultMiddleware';
import authReducer from './features/auth/authSlice';

const production = process.env.NODE_ENV === 'production';

const rootReducer = combineReducers({
  auth: authReducer,
});

const middleware = (getDefaultMiddleware: CurriedGetDefaultMiddleware) =>
  production ? getDefaultMiddleware() : getDefaultMiddleware().concat(logger);

export const store = configureStore({
  reducer: rootReducer,
  middleware,
  devTools: !production,
});

export type RootState = ReturnType<typeof rootReducer>;
export type AppDispatch = typeof store.dispatch;
