import { withStateHandlers, StateHandler } from "recompose";
import { includes, filter } from "lodash";

import {
  toggleFlippedCards,
  setFoundCards
} from "../helper";
import { Card, GameDifficulty } from "../model";

export interface GameState {
  loading: boolean;
  cards: Card[];
  startingTime: number;
  started: boolean;
  gameDifficulty: GameDifficulty;
  cardOnHold?: string;
  gameWon: boolean;
}

export type StateHandlers = {
  initGame: () => StateHandler<GameState>;
  startNewGame: (cards: Card[]) => StateHandler<GameState>;
  startTimer: () => StateHandler<GameState>;
  toggleHoldCard: (cardId?: string) => StateHandler<GameState>;
  toggleFlips: (...cardIds: string[]) => StateHandler<GameState>;
  setFounds: (...cardIds: string[]) => StateHandler<GameState>;
  winGame: () => StateHandler<GameState>;
};

const initialState: GameState = {
  loading: false,
  cards: [],
  startingTime: 0,
  started: false,
  gameDifficulty: 0,
  gameWon: false
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


export const winGame = () => () => ({
  gameWon: true
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

export const withGameStateHandlers = withStateHandlers(initialState, {
  initGame,
  startNewGame,
  startTimer,
  toggleFlips,
  setFounds,
  toggleHoldCard,
  winGame
});

export default withGameStateHandlers;