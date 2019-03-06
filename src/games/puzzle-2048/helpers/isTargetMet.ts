import { Grid } from "../model";

const isTargetMet = (grid: Grid, target: number) => {
  for (const row of grid) {
    for (const tile of row) {
      if (tile === target) {
        return true;
      }
    }
  }

  return false;
};

export default isTargetMet;
