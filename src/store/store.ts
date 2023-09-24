import { combineReducers, configureStore } from "@reduxjs/toolkit";

import { api } from "../api/country.api";

import filterReducer from "./filter.slice";

import searchReducer from "./search.slice";

const combineReducer = combineReducers({
  [api.reducerPath]: api.reducer,
  filter: filterReducer,
  search: searchReducer,
});

export const store = configureStore({
  reducer: combineReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(api.middleware),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
