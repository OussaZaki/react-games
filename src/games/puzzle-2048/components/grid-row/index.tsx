import * as React from "react";
import { GridCell } from "../index";

import "./styles.scss";

export const _getCells = (size: number) => {
  const cells = [];

  for (let key = 0; key < size; key++) {
    cells.push(<GridCell key={key} />);
  }

  return cells;
};

type Props = {
  rowSize: number;
};

const GridRow: React.FC<Props> = ({ rowSize }) => (
  <div className="grid-row">{_getCells(rowSize)}</div>
);

export default GridRow;
