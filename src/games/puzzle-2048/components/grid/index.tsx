import * as React from "react";
import { GridRow } from "../index";

import "./styles.scss";

export const _getRows = (size: number) => {
  const rows = [];

  for (let index = 0; index < size; index++) {
    const key = `row_${index}`;
    rows.push(<GridRow key={key} rowSize={size} />);
  }

  return rows;
};

type Props = {
  gridSize?: number;
};

const Grid: React.FC<Props> = ({ gridSize = 4 }) => (
  <div className="grid">{_getRows(gridSize)}</div>
);

export default Grid;
