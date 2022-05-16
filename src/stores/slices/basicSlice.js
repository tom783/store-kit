import { createSlice } from '@reduxjs/toolkit';

const initialState = {};

export const basicSlice = createSlice({
  name: 'basic',
  initialState,
  reducers: {
    basicCheck: () => {
      console.log('basic slice on');
    },
  },
});

export const { basicCheck } = basicSlice.actions;
export default basicSlice.reducer;
