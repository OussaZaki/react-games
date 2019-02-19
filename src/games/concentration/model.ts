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

export type Props = {
  cards: Card[];
  loading: boolean;
};

export type Handlers = {
  handleCardClick: (card: string) => void;
};

export type GameProps = Props & Handlers;