import { PayloadAction, createSlice } from "@reduxjs/toolkit";

const initialState = { value: ["all"] };

export const filterSlice = createSlice({
  name: "filter",
  initialState,
  reducers: {
    setFilter(state, { payload }: PayloadAction<string[]>) {
      state.value = payload;
    },
  },
});

export const { setFilter } = filterSlice.actions;

export default filterSlice.reducer;
