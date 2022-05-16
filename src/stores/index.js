import { configureStore } from '@reduxjs/toolkit';
import { composeWithDevTools } from 'redux-devtools-extension';
import rootReducer from './slices';

export const store = configureStore({
  reducer: rootReducer,
  middleware: [],
  devTools: composeWithDevTools(),
});

export default store;
