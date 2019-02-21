import { getCards, setFlippedCards, unsetFlippedCards, toggleFlippedCards } from "./helper";
import { map, includes, filter } from "lodash";
import { Card, GameState, GameProps } from "./model";
import { withStateHandlers, lifecycle, withHandlers } from "recompose";

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

export const firstCardClick = () => () => ({
  started: true,
  startingTime: Date.now()
});

export const toggleHoldCard = (state: GameState) => (cardId: string) => {
  return state.cardOnHold
    ? {
        cardOnHold: undefined
      }
    : {
        cardOnHold: cardId
      };
};

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

export const toggleFlips = (state: GameState) => (cards: Card[]) => {
  const ids = map(cards, "id");
  const cardsInDeck = filter(state.cards, _card => includes(ids, _card.id));
  if (!cardsInDeck.length) {
    throw Error("No card was found");
  }

  return {
    cards: toggleFlippedCards(state.cards, ids)
  };
};

export const onCardClick = (props: GameProps) => (card: Card) => {
  if (card.found) {
    return undefined;
  }

  if (!props.started) {
    props.firstCardClick();
  }

  if (!props.cardOnHold || props.cardOnHold === card.id) {
    props.toggleHoldCard(card.id);
    props.toggleFlips([card]);
  }

  // throw Error("Not Implemented");
};

export const withGameHandlers = withHandlers({
  onCardClick
});

export const withGameStateHandlers = withStateHandlers(initialState, {
  initGame,
  startNewGame,
  firstCardClick,
  toggleFlips,
  toggleHoldCard
});

// QUESTION: why is GameState merged into GameProps?
export const withLifecycle = lifecycle<GameProps, {}>({
  async componentWillMount() {
    this.props.initGame();
    const cards = await getCards(this.props.gameDifficulty);
    this.props.startNewGame(cards);
  }
});
