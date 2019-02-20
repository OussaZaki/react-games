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
}

export type Handlers = {
  initGame: () => StateHandler<GameState>;
  startNewGame: (cards: Card[]) => StateHandler<GameState>;
  onCardClick: (card: string) => StateHandler<GameState>;
};

export type GameProps = GameState & Handlers;