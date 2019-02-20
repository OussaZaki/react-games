import { getCards, setFlippedCards, unsetFlippedCards, firstCardClick } from "./helper";
import { map, includes, filter } from "lodash";
import { Card, GameState, GameProps } from "./model";
import { withStateHandlers, lifecycle } from "recompose";

const initialState: GameState = {
  loading: false,
  cards: [],
  startingTime: 0,
  started: false,
  gameDifficulty: 0
};

export const loadGamefromCache = () => () => {
  throw Error("Not Implemented");
};

export const initGame = () => () => ({
  loading: true
});

export const startNewGame = () => (cards: Card[]) => ({
  cards,
  loading: false
});

export const flipCards = (state: GameState) => (cards: Card[]) => {
  const ids = map(cards, "id");
  const cardsInDeck = filter(state.cards, _card => includes(ids, _card.id));
  if (!cardsInDeck.length) {
    throw Error("No card was found");
  }

  return {
    cards: setFlippedCards(state.cards, ids)
  };
};

export const unflipCards = (state: GameState) => (cards: Card[]) => {
  const ids = map(cards, "id");
  const cardsInDeck = filter(state.cards, _card => includes(ids, _card.id));
  if (!cardsInDeck.length) {
    throw Error("No card was found");
  }

  return {
    cards: unsetFlippedCards(state.cards, ids)
  };
};

export const onCardClick = (state: GameState) => (card: Card) => {
  if (!state.started) {
    return firstCardClick();
  }

  if (card.found || card.flipped) {
    return undefined;
  }

  throw Error("Not Implemented");
};

export const withGameStateHandlers = withStateHandlers(initialState, {
  initGame,
  startNewGame,
  onCardClick
});

// QUESTION: why is GameState merged into GameProps?
export const withLifecycle = lifecycle<GameProps, {}>({
  async componentWillMount() {
    this.props.initGame();
    const cards = await getCards(this.props.gameDifficulty);
    this.props.startNewGame(cards);
  }
});
