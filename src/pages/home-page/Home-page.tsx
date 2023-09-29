import { CountryCard } from "../../components/country-card/Country-card";
import { useLoaderData } from "react-router-dom";
import { Country } from "../../models/country.type";
import { useMemo } from "react";
import { CountryDataPanel } from "../../components/country-data-panel/Country-data-panel";

import { useSelector } from "react-redux";
import { RootState } from "../../store/store";

import HomePageCss from "./Home-page.module.scss";

export const HomePage = (): JSX.Element => {
  const countriesLoader = useLoaderData() as Country[];

  const countriesByRegion = useSelector(
    ({ filter: { value } }: RootState) => value
  );
  const countriesBySearch = useSelector(
    ({ search: { value } }: RootState) => value
  );

  const countries = useMemo(() => {
    const region = countriesByRegion.includes("all")
      ? countriesLoader
      : countriesLoader.filter(({ region }) =>
          countriesByRegion.includes(region.toLowerCase())
        );

    const value =
      countriesBySearch === ""
        ? region
        : region.filter(({ name: { common } }) =>
            common.toLowerCase().includes(countriesBySearch.toLowerCase())
          );

    return value;
  }, [countriesLoader, countriesByRegion, countriesBySearch]);

  return (
    <>
      <div className={HomePageCss.CountryDataPanel}>
        <CountryDataPanel />
      </div>

      <div className={HomePageCss.list}>
        {countries.map((item) => (
          <CountryCard key={item.name.official} country={item} />
        ))}
      </div>
    </>
  );
};
