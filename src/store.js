import { configureStore } from '@reduxjs/toolkit';
import people from './redux/people/reducer';

const store = configureStore({
  reducer: {
    people: people,
  },
});

export default store;
