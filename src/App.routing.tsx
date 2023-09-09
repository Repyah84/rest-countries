import { createBrowserRouter, Navigate } from "react-router-dom";
import { CountryService } from "./api/country.service";

import App from "./App";

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
        loader: async () => CountryService.getCountryList(),
        lazy: async () => {
          const { HomePage } = await import("./pages/home-page/Home-page");
          return { Component: HomePage };
        },
      },
      {
        path: "country/:name",
        loader: async ({ params: { name } }) =>
          CountryService.getCountryByFullName(name as string),
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
