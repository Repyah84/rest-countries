import { Country } from "../models/country.type";

export class CountryService {
  static async getCountryList(): Promise<Country[]> {
    const response = await fetch("https://restcountries.com/v3.1/all");

    const countryList = await response.json();

    return countryList;
  }
}
