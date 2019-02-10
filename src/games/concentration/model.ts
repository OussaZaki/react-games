export interface Card {
  id: string;
  svg: string;
  flipped: boolean;
  found: boolean;
  isDuplicate?: boolean;
};
