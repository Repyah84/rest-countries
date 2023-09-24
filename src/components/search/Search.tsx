import SearchCss from "./Search.module.scss";

interface Props {
  value: string;
  placeholder: string;
  searchFn: (value: string) => void;
}

export const Search = ({ value, placeholder, searchFn }: Props) => {
  return (
    <label className={SearchCss.host}>
      <span className="material-symbols-outlined">search</span>

      <input
        type="text"
        placeholder={placeholder}
        className={SearchCss.input}
        value={value}
        onChange={(e) => searchFn(e.target.value)}
      />
    </label>
  );
};
