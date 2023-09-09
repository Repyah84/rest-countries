import HeaderCss from "./Header.module.scss";

export function Header(): JSX.Element {
  return (
    <div className={HeaderCss.host}>
      <div className={HeaderCss.header}>
        <h2>Where in the world?</h2>
      </div>
    </div>
  );
}