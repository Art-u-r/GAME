import { configureStore } from '@reduxjs/toolkit';
import themeReducer from '../reducers/themeReducer';

const store = configureStore({
  reducer: {
    themes: themeReducer,
  },
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;

export default store;
