import { Grid } from "../model";

const initializeGrid = (size: number): Grid => Array(size).fill(null).map(() => Array(size).fill(0));

export default initializeGrid;
