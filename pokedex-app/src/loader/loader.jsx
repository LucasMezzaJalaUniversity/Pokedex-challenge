import { getRequestFromAPI } from "../api/api";

export const pokemonLoader = async () => {
  const data = await getRequestFromAPI(`https://pokeapi.co/api/v2/pokemon?offset=0&limit=20`);
  const pokemonsUrl = data.results.map(row => getRequestFromAPI(row.url));
  const pokemonsDetail = await Promise.all(pokemonsUrl);
  return pokemonsDetail;
};
