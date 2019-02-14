import { getCards, setFlippedCard } from "./helper";
import { map, find } from "lodash";
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

export const flipCard = state => (card: Card) => {
  const cardInDeck = find(state.cards, _card => _card.id === card.id);
  if (!cardInDeck)
    throw "Card not found";
  
  return {
    ...state,
    cards: setFlippedCard(state.cards, card.id)
  }
};

export const onCardClick = state => (card: Card) => {
  if (card.found || card.flipped) return state;
  else throw "Not Implemented";
};
