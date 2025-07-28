import { useContext, useEffect } from "react";
import { Link, useNavigate, useParams } from "react-router";
import { PokemonContext } from "../../contexts/PokemonContext";
import { PokemonIdentity } from "../molecules/PokemonIdentity";
import { TypeTags } from "../molecules/TypeTags";
import { Button } from "../atoms/Button";
import { Image } from "../atoms/Image";
import { PokemonStats } from "../organisms/PokemonStats";
import { DetailPokemonContext } from '../../contexts/DetailPokemonContext'


const PokemonDetail = () => {
  const { detailPokemon, setDetailPokemon } = useContext(DetailPokemonContext);

  const { id } = useParams();
  const { listRef } = useContext(PokemonContext);
  const navigate = useNavigate();

  const categoriesColors = {
    grass: 'green',
    poison: 'purple',
    fire: 'orange',
    bug: 'dark-green',
    water: 'blue',
    normal: 'gray',
    electric: 'yellow',
    ground: 'dark-orange',
    rock: 'dark-gray',
    fairy: 'pink',
  }

  useEffect(() => { 
    if (!listRef?.current || listRef.current.length === 0) {
      navigate("/");
      return;
    }

    const foundPokemon = listRef.current.find(p => p.id === Number(id));
    if (!foundPokemon || Object.values(foundPokemon).length === 0) {
      navigate("/");
      return;
    }

    setDetailPokemon(foundPokemon);
  }, [id]);

  return (
    <section style={{ display: "flex", height: "calc(100vh - 48px)"}}>
      {!listRef?.current || listRef.current.length === 0 && (!detailPokemon || Object.values(detailPokemon).length === 0) ?
        null : (
        <>
          <article style={{ flex: 1}}>
            <div style={{ padding: "2em 4em"}}>
              <PokemonIdentity name={detailPokemon.name} number={id} color="black" classname={"pokemon-identity-detail"} />
              <div style={{ marginTop: "1em"}}>
                <p>Generation 1</p>
                <TypeTags types={detailPokemon.types} text={false} />
              </div>
              <PokemonStats />
            </div>
          </article>
          <aside className={`${detailPokemon.types && detailPokemon.types.length > 0 ? `card-color-${categoriesColors[detailPokemon.types[0].type.name]}` : "card-color-default"}`} style={{ flex: 1, padding: "2em", display: "flex",
            justifyContent: "space-between", flexDirection: "column", position: "relative" }}>
            <Image src={`/icons/pattern-detail.svg`} alt={'pattern'} classname={'pattern-detail-img'} ></Image>
            <div style={{ width: "55%", margin: "auto"}}>
              <Image src={detailPokemon.sprites ? detailPokemon.sprites.front_default : ''} alt={"pokemon"} classname={'pokemon-detail'} ></Image>
              <Image src={`/icons/full-pokeball.svg`} alt={'Pokeball'} classname={'full-pokeball-img'} ></Image>
            </div>
            <div style={{ display: "flex", alignItems: "center", gap: "1em"}}>
              <Link style={{ display: "flex", width: "100%", color: "inherit", textDecoration: "none" }} to={`/pokemon/${Number(id) === 1 ? listRef.current.length : Number(id) - 1}`}>
                <Button classname={'detail-btn-white'}>Previous {Number(id) === 1 ? listRef.current.length : Number(id) - 1}</Button>   
              </Link>
              <Link style={{ display: "flex", width: "100%", color: "inherit", textDecoration: "none" }} to={`/pokemon/${Number(id) === listRef.current.length ? 1 : Number(id) + 1}`}>  
                <Button classname={'detail-btn'}>Next {Number(id) === listRef.current.length ? 1 : Number(id) + 1}</Button>
              </Link>
            </div>
          </aside>
        </>)}
    </section>
  );
};

export default PokemonDetail;