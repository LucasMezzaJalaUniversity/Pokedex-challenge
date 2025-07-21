import { useContext } from "react";
import { Link, useNavigate, useParams } from "react-router";
import { PokemonContext } from "../../contexts/PokemonContext";
import { PokemonIdentity } from "../molecules/PokemonIdentity";
import { TypeTags } from "../molecules/TypeTags";

export const PokemonDetail = () => {
  const { id } = useParams();
  const { listRef } = useContext(PokemonContext);
  const navigate = useNavigate();

  if (!listRef?.current || listRef.current.length === 0) {
    navigate("/");
    return;
  }

  const pokemon = listRef.current.find(p => p.id === id);

  if (!pokemon) {
    navigate("/");
    return;
  }

  return (
    <section>
      <article>
        <PokemonIdentity name={pokemon.name} number={id} />
        <div>
          <p>Generation 1</p>
          <TypeTags types={pokemon.types} />
        </div>
        <div>

        </div>
      </article>
      <aside>
        <Image src={pokemon.front_default} alt={pokemon.name} classname={'pokemon-img'} ></Image>
        <Image src={`/icons/Pokeball.svg`} alt={'Pokeball'} classname={'pokeball-img'} ></Image>
        <div>
          <Link to={`/pokemon/${id === 1 ? listRef.current.length : id - 1}`}>
            <Button classname={'game-btn'}>Previous {id === 1 ? listRef.current.length : id - 1}</Button>   
          </Link>
          <Link to={`/pokemon/${id === listRef.current.length ? 1 : id + 1}`}>  
            <Button classname={'game-btn'}>Next {id === listRef.current.length ? 1 : id + 1}</Button>
          </Link>
        </div>
      </aside>
    </section>
  );
};