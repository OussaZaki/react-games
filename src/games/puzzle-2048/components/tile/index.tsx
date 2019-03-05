import * as React from "react";
import { compose } from "recompose";
import { TileProps, Props, withStyleProps } from "./behavior";

import "./styles.scss";

const Tile: React.FC<TileProps> = ({ className, value }) => (
  <div className={className}>
    <div className="tile-content">{value}</div>
  </div>
);

export default compose<TileProps, Props>(withStyleProps)(Tile);
