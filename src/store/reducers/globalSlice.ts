import { createSlice } from '@reduxjs/toolkit';

export interface GlobalState {
  drawerState: boolean;
}

const initialState = {
  drawerState: false,
} as GlobalState;

const globalSlice = createSlice({
  name: 'global',
  initialState,
  reducers: {
    drawerAction: (state, action) => {
      state.drawerState = action.payload;
    },
  },
});

export const { drawerAction } = globalSlice.actions;

export default globalSlice.reducer;
