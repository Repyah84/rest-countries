import HeaderCss from "./Header.module.scss";

export const Header = (): JSX.Element => {
  const themeChange = () => {
    document.body.classList.toggle("__dark-mode__");
  };

  return (
    <div className={HeaderCss.host}>
      <div className={HeaderCss.header}>
        <h2 className={HeaderCss.title}>Where in the world?</h2>

        <div className={HeaderCss.action}>
          <button className={HeaderCss.theme} onClick={themeChange}>
            <span className="material-symbols-outlined">dark_mode</span>
            <span>Dark Mode</span>
          </button>
        </div>
      </div>
    </div>
  );
};
