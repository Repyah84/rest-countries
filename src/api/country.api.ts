import { BASE_URL } from "../const/bae-url";
import { Country } from "../models/country.type";

import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const api = createApi({
  reducerPath: "endpointsApi",
  baseQuery: fetchBaseQuery({
    baseUrl: BASE_URL,
  }),
  endpoints: (builder) => ({
    countries: builder.query<Country[], void>({
      query: () => "all",
    }),
  }),
});

export const { useCountriesQuery } = api;
