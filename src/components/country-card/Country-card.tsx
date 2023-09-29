import { Link } from "react-router-dom";
import { Country } from "../../models/country.type";

import CountryCardCss from "./Country-card.module.scss";
import { CountryDescriptionItem } from "../country-description-item/Country-description-item";
import { CountryDescriptionItems } from "../country-description-items/Country-description-items";

interface Props {
  country: Country;
}

const CountryCard = ({ country }: Props): JSX.Element => {
  return (
    <Link
      to={`/country/${country.name.official}`}
      className={CountryCardCss.host}
    >
      <div>
        <img
          className={CountryCardCss.flag}
          src={country.flags.svg}
          width="320"
          height="160"
          alt="Flag"
        />
      </div>

      <div className={CountryCardCss.main}>
        <div className={CountryCardCss.name}>{country.name.common}</div>

        <div className={CountryCardCss.info}>
          <CountryDescriptionItem title="Population">
            {country.population}
          </CountryDescriptionItem>

          <CountryDescriptionItem title="Region">
            {country.region}
          </CountryDescriptionItem>

          {country.capital && (
            <CountryDescriptionItem title="Capital">
              <CountryDescriptionItems value={country.capital} />
            </CountryDescriptionItem>
          )}
        </div>
      </div>
    </Link>
  );
};

export { CountryCard };
