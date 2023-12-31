import { createBrowserRouter, Navigate } from "react-router-dom";

import App from "./App";
import { countriesData, countryByName } from "./store/store-data-async";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "",
        element: <Navigate to="home" replace />,
      },
      {
        path: "home",
        loader: () => countriesData(),
        lazy: async () => {
          const { HomePage } = await import("./pages/home-page/Home-page");
          return { Component: HomePage };
        },
      },
      {
        path: "country/:name",
        loader: async ({ params: { name } }) => countryByName(name as string),
        lazy: async () => {
          const { CountryPage } = await import(
            "./pages/country-page/Country-page"
          );
          return { Component: CountryPage };
        },
      },
      {
        path: "*",
        element: <Navigate to="home" replace />,
      },
    ],
  },
]);
