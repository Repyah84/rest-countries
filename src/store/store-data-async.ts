import { api } from "../api/country.api";
import { Country } from "../models/country.type";
import { store } from "./store";

export const countriesData = async (): Promise<Country[] | undefined> =>
  (await store.dispatch(api.endpoints.countries.initiate())).data;

export const countryByName = async (
  name: string
): Promise<Country | undefined> => {
  const countries = await countriesData();

  return countries?.find(({ name: { official } }) => official === name);
};
