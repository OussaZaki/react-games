import { StateHandlers, GameState } from "./logic/withGameStateHandlers";

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

export type Handlers = {
  cardsComparison: (cardOnHold: string, currentCard: string) => void;
  onCardClick: (card: Card) => void;
};

export type GameProps = GameState & StateHandlers & Handlers;