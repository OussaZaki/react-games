import {
  getCards,
  setFlippedCards,
  unsetFlippedCards,
  toggleFlippedCards,
  setFoundCards
} from "./helper";
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

export const startTimer = () => () => ({
  started: true,
  startingTime: Date.now()
});

export const toggleHoldCard = () => (cardId?: string) => {
  return cardId
    ? {
        cardOnHold: cardId
      }
    : {
        cardOnHold: undefined
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

export const setFounds = (state: GameState) => (...cardIds: string[]) => {
  const cardsInDeck = filter(state.cards, _card => includes(cardIds, _card.id));
  if (!cardsInDeck.length) {
    throw Error("No card was found");
  }

  return {
    cards: setFoundCards(state.cards, cardIds)
  };
};

export const toggleFlips = (state: GameState) => (...cardIds: string[]) => {
  const cardsInDeck = filter(state.cards, _card => includes(cardIds, _card.id));
  if (!cardsInDeck.length) {
    throw Error("No card was found");
  }

  return {
    cards: toggleFlippedCards(state.cards, cardIds)
  };
};

export const cardsComparison = (state: GameState) => (cardId1: string, cardId2: string) => {
  return {};
};


export const onCardClick = (props: GameProps) => (card: Card) => {
  if (card.found) {
    return undefined;
  }

  if (!props.started) {
    props.startTimer();
  }

  // Handle the first flipped card.
  if (!props.cardOnHold || props.cardOnHold === card.id) {
    props.toggleHoldCard(card.id);
    props.toggleFlips(card.id);
    return;
  }

  props.toggleFlips(card.id);
  setTimeout(() => {
    props.cardsComparison(props.cardOnHold!, card.id);
  }, 350);

  // throw Error("Not Implemented");
};

export const withGameHandlers = withHandlers({
  onCardClick
});

export const withGameStateHandlers = withStateHandlers(initialState, {
  initGame,
  startNewGame,
  startTimer,
  toggleFlips,
  setFounds,
  toggleHoldCard,
  cardsComparison
});

// QUESTION: why is GameState merged into GameProps?
export const withLifecycle = lifecycle<GameProps, {}>({
  async componentWillMount() {
    this.props.initGame();
    const cards = await getCards(this.props.gameDifficulty);
    this.props.startNewGame(cards);
  }
});
