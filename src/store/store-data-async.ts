import { api } from "../api/country.service";
import { store } from "./store";

export const countriesData = async () =>
  (await store.dispatch(api.endpoints.countries.initiate())).data;

export const countryByName = async (name: string) => {
  const countries = await countriesData();

  return countries?.find(({ name: { official } }) => official === name);
};
