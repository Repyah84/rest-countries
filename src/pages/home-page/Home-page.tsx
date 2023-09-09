import { useLoaderData } from "react-router-dom";

import { Country } from "../../models/country.type";
import { CountryCard } from "../../components/country-card/Country-card";

import HomePageCss from "./Home-page.module.scss";

export function HomePage(): JSX.Element {
  console.log("HomePage");

  const countries = useLoaderData() as Country[];

  const countryList = countries.map((item, index) => (
    <CountryCard key={index} country={item} />
  ));

  return (
    <>
      <h1>HOME PAGE</h1>
      <div className={HomePageCss.list}>{countryList}</div>;
    </>
  );
}
