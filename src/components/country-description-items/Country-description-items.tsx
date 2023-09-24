import { memo } from "react";

interface Props {
  value: string[];
}

const CountryDescriptionItems = memo(({ value }: Props) => {
  return value.map((value, index, arr) => (
    <span key={index}>
      {value}
      {arr.length - 1 === index ? "" : ","}{" "}
    </span>
  ));
});

export { CountryDescriptionItems };
