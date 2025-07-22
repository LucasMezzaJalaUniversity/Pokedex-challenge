import { createBrowserRouter } from "react-router";
import App from "./App";
import { Error } from "./components/pages/Error";
import { pokemonLoader } from "./loader/loader";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <Error />,
    loader: pokemonLoader,
    children: [
      {
        path: "/",
        loader: pokemonLoader,
        lazy: async () => ({
          Component: (await import("./components/templates/Home")).Home,
        }),
      },
      {
        path: "game",
        lazy: async () => ({
          Component: (await import("./components/templates/Game")).Game,
        }),
      },
      {
        path: "langs",
        lazy: async () => ({
          Component: () => <section>langs</section>,
        }),
      },
      {
        path: "types",
        lazy: async () => ({
          Component: (await import("./components/templates/Types")).Types,
        }),
      },
      {
        path: "generations",
        lazy: async () => ({
          Component: (await import("./components/templates/Generations")).Generations,
        }),
      },
    ],
  },
]);