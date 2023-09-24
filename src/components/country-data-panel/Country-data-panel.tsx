import { memo } from "react";
import { Select } from "../select/Select";
import CountryDataPanelCss from "./Country-data-panel.module.scss";

import { Option } from "../../components/select/Select";
import { Search } from "../search/Search";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../store/store";
import { setFilter } from "../../store/filter.slice";
import { setSearch } from "../../store/search.slice";

export const CountryDataPanel = memo(() => {
  // console.log("CountryDataPanel");

  const filterStateValue = useSelector(
    ({ filter: { value } }: RootState) => value
  );
  const searchStateValue = useSelector(
    ({ search: { value } }: RootState) => value
  );

  const dispatch = useDispatch();

  const onSelect = (value: string[]) => {
    dispatch(setFilter(value));
  };

  const searchFn = (value: string) => {
    dispatch(setSearch(value));
  };

  const selectOptions: Option[] = [
    {
      title: "All",
      value: "all",
    },
    {
      title: "Africa",
      value: "africa",
    },
    {
      title: "Asia",
      value: "asia",
    },
    {
      title: "Europe",
      value: "europe",
    },
    {
      title: "Oceania",
      value: "oceania",
    },
  ];

  return (
    <div className={CountryDataPanelCss.host}>
      <Search
        placeholder="Search Country"
        value={searchStateValue}
        searchFn={searchFn}
      />

      <Select
        placeholder="Filter by Region"
        value={filterStateValue}
        options={selectOptions}
        selectFn={onSelect}
      />
    </div>
  );
});
