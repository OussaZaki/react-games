import { StateHandler } from "recompose";

export interface Card {
  id: string;
  svg: string;
  flipped: boolean;
  found: boolean;
  isDuplicate?: boolean;
};

export enum GameDifficulty {
  beginner = 1,
  mediun,
  advanced
};

export type GameState = {
  loading: boolean;
  cards: Card[];
  startingTime: number;
  started: boolean;
  gameDifficulty: GameDifficulty;
};

export type StateHandlerFn = StateHandler<GameState>;
