import { createBrowserRouter } from "react-router";
import { Home } from "./components/templates/Home";
import { Game } from "./components/templates/Game";
import { Types } from "./components/templates/Types";
import { Generations } from "./components/templates/Generations";
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
      { path: "/", element: <Home />,  },
      { path: "game", element: <Game />,  },
      { path: "langs", element: <section>Langs</section> },
      { path: "types", element: <Types /> },
      { path: "generations", element: <Generations /> },
    ],
  },
]);