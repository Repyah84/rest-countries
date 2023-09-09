import { BASE_URL } from "../const/bae-url";
import { Country } from "../models/country.type";

export class CountryService {
  static async getCountryList(): Promise<Country[]> {
    const url = new URL("v3.1/all", BASE_URL);

    const response = await fetch(`${url.toString()}`);

    const countryList = await response.json();

    return countryList;
  }

  static async getCountryByFullName(fullName: string): Promise<Country> {
    const url = new URL(`v3.1/name/${fullName}`, BASE_URL);

    url.searchParams.set("fullText", "true");

    const response = await fetch(`${url.toString()}`);

    const country = await response.json();

    return country[0];
  }
}
