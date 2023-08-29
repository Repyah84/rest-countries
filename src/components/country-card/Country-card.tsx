import { Country } from "../../models/country.type";

import CountryCardCss from "./Country-card.module.scss";

interface Props {
  country: Country;
}

export function CountryCard({ country }: Props): JSX.Element {
  console.log(country);

  const countryCapitals =
    country.capital?.map((capital, index) => (
      <span key={index} className={CountryCardCss.value}>
        {capital}{" "}
      </span>
    )) ?? "No capital";

  return (
    <div className={CountryCardCss.host}>
      <div className={CountryCardCss.header}>
        <img
          className={CountryCardCss.flag}
          src={country.flags.svg}
          width="320"
          height="200"
          alt="Flag"
        />
      </div>

      <div className={CountryCardCss.main}>
        <div className={CountryCardCss.name}>{country.name.common}</div>

        <div className={CountryCardCss.info}>
          <div>
            <span>Population: </span>
            <span className={CountryCardCss.value}>{country.population}</span>
          </div>

          <div>
            <span>Region: </span>
            <span className={CountryCardCss.value}>{country.region}</span>
          </div>

          <div>
            <span>Capital: </span>
            {countryCapitals}
          </div>
        </div>
      </div>
    </div>
  );
}
