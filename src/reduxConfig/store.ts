import { configureStore } from '@reduxjs/toolkit';
import phrases from './slices/phrasesSlice';

const store = configureStore({
  reducer: {
    phrases: phrases,
  },
});

export default store;

export type RootState = ReturnType<typeof store.getState>;