import { useLoaderData } from "react-router-dom";
import { Country } from "../../models/country.type";

import CountryPageCss from "./Country-page.module.scss";
import { CountryDescriptionItem } from "../../components/country-description-item/Country-description-item";
import { CountryDescriptionItems } from "../../components/country-description-items/Country-description-items";

export const CountryPage = (): JSX.Element => {
  const country = useLoaderData() as Country;

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

              {country.capital && (
                <CountryDescriptionItem title="Capital">
                  <CountryDescriptionItems value={country.capital} />
                </CountryDescriptionItem>
              )}
            </div>

            <div className={CountryPageCss.descriptionList}>
              <CountryDescriptionItem title="Top Level Domain">
                <CountryDescriptionItems value={country.tld} />
              </CountryDescriptionItem>

              {country.currencies && (
                <CountryDescriptionItem title="Currencies">
                  <CountryDescriptionItems
                    value={Object.keys(country.currencies)}
                  />
                </CountryDescriptionItem>
              )}

              <CountryDescriptionItem title="Languages">
                <CountryDescriptionItems
                  value={Object.values(country.languages)}
                />
              </CountryDescriptionItem>
            </div>
          </div>

          <div className={CountryPageCss.border}></div>
        </div>
      </div>
    </div>
  );
};
