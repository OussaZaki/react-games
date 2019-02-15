import { getCards, setFlippedCards, unsetFlippedCards } from "./helper";
import { map, includes, filter } from "lodash";
import { GameDifficulty, Card } from "./model";

export const loadGamefromCache = state => () => {
  throw "Not Implemented";
};

export const initGame = state => () => {
  return {
    ...state,
    loading: true
  };
};

export const startNewGame = state => async () => ({
  ...state,
  cards: await getCards(state.gameDifficulty),
  loading: false
});

export const firstClick = state => () => ({
  ...state,
  started: true,
  startingTime: Date.now()
});

export const flipCards = state => (cards: Card[]) => {
  const ids = map(cards, 'id');
  const cardsInDeck = filter(state.cards, _card => includes(ids, _card.id));
  if (!cardsInDeck.length)
    throw "No card was found";
  
  return {
    ...state,
    cards: setFlippedCards(state.cards, ids)
  }
};

export const unflipCards = state => (cards: Card[]) => {
  const ids = map(cards, 'id');
  const cardsInDeck = filter(state.cards, _card => includes(ids, _card.id));
  if (!cardsInDeck.length)
    throw "No card was found";
  
  return {
    ...state,
    cards: unsetFlippedCards(state.cards, ids)
  }
};

export const onCardClick = state => (card: Card) => {
  if (card.found || card.flipped) return state;
  else throw "Not Implemented";
};
