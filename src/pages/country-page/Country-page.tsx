import { useLoaderData } from "react-router-dom";
import { Country } from "../../models/country.type";

import CountryPageCss from "./Country-page.module.scss";
import { CountryDescriptionItem } from "../../components/country-description-item/Country-description-item";
import { CountryDescriptionItems } from "../../components/country-description-items/Country-description-items";

export function CountryPage(): JSX.Element {
  const country = useLoaderData() as Country;

  const currencies = Object.keys(country.currencies);
  const languages = Object.values(country.languages);

  console.log("CountryPage", country);

  return (
    <div className={CountryPageCss.host}>
      <div className={CountryPageCss.info}>
        <div>
          <img
            className={CountryPageCss.flag}
            src={country.flags.svg}
            alt="Country Flag"
          />
        </div>

        <div className={CountryPageCss.description}>
          <h2 className={CountryPageCss.title}>{country.name.official}</h2>

          <div className={CountryPageCss.descriptionSection}>
            <div className={CountryPageCss.descriptionList}>
              <CountryDescriptionItem title="Name">
                {country.name.common}
              </CountryDescriptionItem>

              <CountryDescriptionItem title="Population">
                {country.population}
              </CountryDescriptionItem>

              <CountryDescriptionItem title="Region">
                {country.region}
              </CountryDescriptionItem>

              <CountryDescriptionItem title="Sub Region">
                {country.subregion}
              </CountryDescriptionItem>

              <CountryDescriptionItem title="Capital">
                <CountryDescriptionItems value={country.capital} />
              </CountryDescriptionItem>
            </div>

            <div className={CountryPageCss.descriptionList}>
              <CountryDescriptionItem title="Top Level Domain">
                <CountryDescriptionItems value={country.tld} />
              </CountryDescriptionItem>

              <CountryDescriptionItem title="Currencies">
                <CountryDescriptionItems value={currencies} />
              </CountryDescriptionItem>

              <CountryDescriptionItem title="Languages">
                <CountryDescriptionItems value={languages} />
              </CountryDescriptionItem>
            </div>
          </div>

          <div className={CountryPageCss.border}></div>
        </div>
      </div>
    </div>
  );
}
