import { memo } from "react";

interface Props {
  value: string[] | undefined;
}

const CountryDescriptionItems = memo(function CountryDescriptionItems({
  value: valueList,
}: Props) {
  console.log("CountryDescriptionItems", valueList);

  return (
    valueList?.map((value, index, arr) => (
      <span key={index}>
        {value}
        {arr.length - 1 === index ? "" : ","}{" "}
      </span>
    )) ?? "No capital"
  );
});

export { CountryDescriptionItems };
