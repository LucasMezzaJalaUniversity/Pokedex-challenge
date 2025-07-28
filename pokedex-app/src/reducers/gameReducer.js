export const initialState = {
  score: 0,
  failCount: 0,
  gameOver: false,
  revealed: false,
  selectedPokemon: null,
};

export const gameReducer = (state, action) => {
  switch (action.type) {
    case 'SELECTED':
      return { ...state, selectedPokemon: action.payload, revealed: false };
    case 'CORRECT_ANSWER':
      return { ...state, revealed: true };
    case 'NEXT_ROUND':
      return { ...state, revealed: false, score: state.score + 100 };
    case 'WRONG_ANSWER':
      return {
        ...state,
        failCount: state.failCount + 1,
        gameOver: state.failCount + 1 >= 3,
      };
    case 'RESTART':
      return initialState;
    default:
      return state;
  }
};