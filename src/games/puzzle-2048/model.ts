import { StateHandlers, GameState } from "./logic/withGameStateHandlers";

export type Grid = number[][];

export type Position = {
  x: number;
  y: number;
};

export type Tile = {
  id?: string;
  value: number;
  position: Position;
};

export enum Direction {
  Up = 1,
  Right,
  Down,
  Left
}

export type Handlers = {
  onMove: (direction: Direction) => void;
  afterMove: (grid: Grid) => void;
};

export type WithProps = {
  tiles: Tile[];
};

export type GameProps = GameState & StateHandlers & WithProps & Handlers;
