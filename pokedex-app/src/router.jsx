import { createBrowserRouter } from "react-router";
import { Home } from "./components/templates/Home";
import { Game } from "./components/templates/Game";
import { Types } from "./components/templates/Types";
import { Generations } from "./components/templates/Generations";
import { getRequestFromAPI } from "./api/api";
import App from "./App";
import { Error } from "./components/pages/Error";

const pokemonLoader = async () => {
  const data = await getRequestFromAPI(`https://pokeapi.co/api/v2/pokemon?offset=0&limit=20`);
  const pokemonsUrl = data.results.map(row => getRequestFromAPI(row.url));
  const pokemonsDetail = await Promise.all(pokemonsUrl);
  return pokemonsDetail;
};

export const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      { path: "/", element: <Home />, loader: pokemonLoader },
      { path: "game", element: <Game />, errorElement: <Error /> },
      { path: "langs", element: <section>Langs</section> },
      { path: "types", element: <Types /> },
      { path: "generations", element: <Generations /> },
    ],
  },
]);