import { getRequestFromAPI } from "../api/api";

export const pokemonLoader = async (limit = 0, offset = 20) => {
  const data = await getRequestFromAPI(`https://pokeapi.co/api/v2/pokemon?offset=${limit}&limit=${offset}`);
  const pokemonsUrl = data.results.map(row => getRequestFromAPI(row.url));
  const pokemonsDetail = await Promise.all(pokemonsUrl);
  return pokemonsDetail;
};
