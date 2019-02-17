import { getCards, setFlippedCards, unsetFlippedCards } from "./helper";
import { map, includes, filter } from "lodash";
import { Card, GameState } from "./model";

export const loadGamefromCache = () => () => {
  throw "Not Implemented";
};

export const initGame = (state: GameState) => () => {
  return {
    ...state,
    loading: true
  };
};

export const startNewGame = (state: GameState) => async () => ({
  ...state,
  cards: await getCards(state.gameDifficulty),
  loading: false
});

export const firstClick = (state: GameState) => () => ({
  ...state,
  started: true,
  startingTime: Date.now()
});

export const flipCards = (state: GameState) => (cards: Card[]) => {
  const ids = map(cards, 'id');
  const cardsInDeck = filter(state.cards, _card => includes(ids, _card.id));
  if (!cardsInDeck.length)
    throw "No card was found";
  
  return {
    ...state,
    cards: setFlippedCards(state.cards, ids)
  }
};

export const unflipCards = (state: GameState) => (cards: Card[]) => {
  const ids = map(cards, 'id');
  const cardsInDeck = filter(state.cards, _card => includes(ids, _card.id));
  if (!cardsInDeck.length)
    throw "No card was found";
  
  return {
    ...state,
    cards: unsetFlippedCards(state.cards, ids)
  }
};

export const onCardClick = (state: GameState) => (card: Card) => {
  if (card.found || card.flipped) return state;
  else throw "Not Implemented";
};
