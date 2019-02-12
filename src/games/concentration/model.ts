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
}