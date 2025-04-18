import { createSlice } from '@reduxjs/toolkit';

export const fenceSlice = createSlice({
  name: 'fences',
  initialState: {
    fenceList: [],
  },
  reducers: {
    addFence: (state, action) => {
      state.fenceList.push(action.payload);
    },
  },
});

export const { addFence } = fenceSlice.actions;
export default fenceSlice.reducer;
