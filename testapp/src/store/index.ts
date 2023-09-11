import { configureStore, getDefaultMiddleware } from '@reduxjs/toolkit';
import rootReducer from './reducer/reducer';

const customizedMiddleware = getDefaultMiddleware({
  serializableCheck: false
});

export const store = configureStore({
  reducer: rootReducer,
  middleware: customizedMiddleware
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
