import { Outlet } from "react-router-dom";

import AppCss from "./App.module.scss";
import { Header } from "./components/header/Header";

function App(): JSX.Element {
  return (
    <div className={AppCss.host}>
      <Header />

      <main className={AppCss.main}>
        <Outlet />
      </main>
    </div>
  );
}

export default App;
