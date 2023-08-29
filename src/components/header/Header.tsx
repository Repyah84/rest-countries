import { Link } from "react-router-dom";

import HeaderCss from "./Header.module.scss";

export function Header(): JSX.Element {
  return (
    <div className={HeaderCss.host}>
      <nav className={HeaderCss.nav}>
        <Link to="home">Home</Link>
        <Link to={`country/${1}`}>Country</Link>
      </nav>
    </div>
  );
}
