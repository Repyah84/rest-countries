import { PayloadAction, createSlice } from "@reduxjs/toolkit";

const initialState = { value: "" };

export const searchSelect = createSlice({
  name: "search",
  initialState,
  reducers: {
    setSearch(state, { payload }: PayloadAction<string>) {
      state.value = payload;
    },
  },
});

export const { setSearch } = searchSelect.actions;

export default searchSelect.reducer;
