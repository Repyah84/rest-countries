import { useEffect, useState } from "react";
import { CountryService } from "../../api/country.service";
import { Country } from "../../models/country.type";
import { CountryCard } from "../../components/country-card/Country-card";

import HomePageCss from "./Home-page.module.scss";

export function HomePage(): JSX.Element {
  const [countries, setCountries] = useState<Country[]>([]);

  const countryData = async () => {
    const countryList = await CountryService.getCountryList();

    console.log(countryList);

    setCountries(countryList);
  };

  useEffect(() => {
    countryData();
  }, [setCountries]);

  const countryList = countries.map((item, index) => (
    <CountryCard key={index} country={item} />
  ));

  return <div className={HomePageCss.list}>{countryList}</div>;
}
