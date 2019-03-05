import { StateHandlers, GameState } from "./logic/withGameStateHandlers";

export type Position = {
  x: number;
  y: number;
};

export type Grid = Array<Array<number | string>>;

export enum Direction {
  Up = 0,
  Right,
  Down,
  Left
}

export type Tile = {
  id: string;
  position: Position;
  value: number;
  previousPosition?: Position;
  mergedFrom?: Tile;
  isNew: boolean;
};

export type GameProps = GameState & StateHandlers;
