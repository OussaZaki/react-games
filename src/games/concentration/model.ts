import { StateHandler } from "recompose";

export interface Card {
  id: string;
  svg: string;
  flipped: boolean;
  found: boolean;
  isDuplicate?: boolean;
}

export enum GameDifficulty {
  beginner = 1,
  mediun,
  advanced
}

export interface GameState {
  loading: boolean;
  cards: Card[];
  startingTime: number;
  started: boolean;
  gameDifficulty: GameDifficulty;
  cardOnHold?: string;
}

export type StateHandlers = {
  initGame: () => StateHandler<GameState>;
  startNewGame: (cards: Card[]) => StateHandler<GameState>;
  startTimer: () => StateHandler<GameState>;
  toggleHoldCard: (cardId?: string) => StateHandler<GameState>;
  toggleFlips: (...cardIds: string[]) => StateHandler<GameState>;
  setFounds: (...cardIds: string[]) => StateHandler<GameState>;
  cardsComparison: (cardId1: string, cardId2: string) => StateHandler<GameState>;
};

export type Handlers = {
  onCardClick: (card: Card) => StateHandler<GameState>;
};

export type GameProps = GameState & StateHandlers & Handlers;