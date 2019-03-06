import * as React from "react";
import { Tile } from "../index";
import { Tile as TileModel } from "../../model";

import "./styles.scss";

export const _getTiles = (tiles: TileModel[]) =>
  tiles.map(tile => (
    <Tile
      key={tile.id}
      position={tile.position}
      value={tile.value}
    />
  ));

type Props = {
  tiles: TileModel[];
};

const TileContainer: React.FC<Props> = ({ tiles }) => (
  <div className="tile-container">{_getTiles(tiles)}</div>
);

export default TileContainer;
