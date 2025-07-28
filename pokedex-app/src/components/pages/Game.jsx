import { useContext, useEffect, useReducer, useRef } from "react"
import { PokemonContext } from "../../contexts/PokemonContext"
import { Button } from "../atoms/Button"
import { Image } from "../atoms/Image"
import { Languages } from "../molecules/Languages"
import './Game.css'
import { EmptyState } from "../molecules/EmptyState"
import { gameReducer, initialState } from "../../reducers/gameReducer"

const Game = () => {
  const { listRef } = useContext(PokemonContext);
  const gameList = useRef([]);
  const [state, dispatch] = useReducer(gameReducer, initialState);
  const { score, failCount, gameOver, revealed, selectedPokemon } = state;

  useEffect(() => {
    if (!listRef?.current || listRef.current.length < 4) return;

    let random;
    for(let i = 0; i < 4; i++) {
      random = Math.floor(Math.random() * listRef.current.length)
      gameList.current[i] = listRef.current[random];
    }

    const selected = Math.floor(Math.random() * 4);
    dispatch({ type: 'SELECTED', payload: gameList.current[selected] });
  }, [score, listRef?.current]);

  const handleAnswer = (pokemonName) => {
    if (gameOver) return;

    if (pokemonName === selectedPokemon.name) {
      dispatch({ type: 'CORRECT_ANSWER' });

      setTimeout(() => {
        dispatch({ type: 'NEXT_ROUND' });
      }, 2000);
    } else {
      dispatch({ type: 'WRONG_ANSWER' });
    }
  };

  const handleRestart = () => {
    dispatch({ type: 'RESTART' });
  }

  return (
    <section className='game'>
      <div className='header'>
        <Languages />
      </div>
      <div className="gameboard">
        {gameOver ? (
          <div>
            <h2>Game Over!</h2>
            <p>Your score: {score}</p>
            <Button classname={'game-btn'} onClick={handleRestart}>Try again!</Button>
          </div>
        ) : selectedPokemon && gameList.current.length > 0 ? (
          <div>
            <Image
              src={selectedPokemon.sprites.front_default}
              classname={revealed ? "pokemon-revealed hidden" : "pokemon-hidden hidden"}
            />
            <ul>
              {gameList.current.map((row, idx) => (
                <li key={idx}>
                  <Button
                    classname={'game-btn'}
                    onClick={() => handleAnswer(row.name)}
                  >
                    {row.name}
                  </Button>
                </li>
              ))}
            </ul>
            <div style={{ marginTop: '1em', textAlign: 'center' }}>
              <p>Score: {score}</p>
              <p>Fails: {failCount}/3</p>
              <Button classname={'game-btn'} onClick={handleRestart}>Restart game</Button>
            </div>
          </div>
        ) : (
          <EmptyState text={'Pokemons not found'} />
        )}
      </div>
    </section>
  );
};

export default Game;