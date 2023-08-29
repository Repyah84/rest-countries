import { CountryFlag } from "./country-flag.type";

export interface Country {
  readonly altSpellings: unknown;
  readonly area: number;
  readonly borders: string[];
  readonly capital?: string[];
  readonly capitalInfo: unknown;
  readonly car: unknown;
  readonly cca2: string;
  readonly cca3: string;
  readonly ccn3: string;
  readonly cioc: string;
  readonly coatOfArms: unknown;
  readonly continents: string[];
  readonly currencies: unknown;
  readonly demonyms: unknown;
  readonly fifa: string;
  readonly flag: string;
  readonly flags: CountryFlag;
  readonly gini: unknown;
  readonly idd: unknown;
  readonly independent: boolean;
  readonly landlocked: boolean;
  readonly languages: { [k: string]: string };
  readonly latlng: number[];
  readonly maps: unknown;
  readonly name: {
    readonly common: string;
    readonly nativeName: unknown;
    readonly official: string;
  };
  readonly population: number;
  readonly postalCode: unknown;
  readonly region: string;
  readonly startOfWeek: string;
  readonly status: string;
  readonly subregion: string;
  readonly timezones: string[];
  readonly tld: string[];
  readonly translations: unknown;
  readonly unMember: boolean;
}
