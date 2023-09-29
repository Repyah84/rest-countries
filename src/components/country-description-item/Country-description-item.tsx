import { ReactNode } from "react";

import CountryDescriptionItemScc from "./Country-description-item.module.scss";

interface Props {
  title: string;
  children: ReactNode;
}

const CountryDescriptionItem = ({ title, children }: Props) => {
  return (
    <div className={CountryDescriptionItemScc.host}>
      <span>{title}: </span>
      <span className={CountryDescriptionItemScc.value}>{children}</span>
    </div>
  );
};

export { CountryDescriptionItem };
