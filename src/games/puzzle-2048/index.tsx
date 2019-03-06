import * as React from "react";
import { compose } from "recompose";

import { Header, Grid, TileContainer } from "./components";
import { GameProps } from "./model";
import { withGameStateHandlers, withTilesProps, withLifecycle, onMoveHandler, afterMoveHandler } from "./logic";

import "./styles.scss";

const Puzzle2048: React.FC<GameProps> = ({ tiles, score }) => (
  <div>
    <Header score={score} bestScore={1024} />
    <div className="game-container">
      <Grid />
      <TileContainer tiles={tiles} />
    </div>
  </div>
);

export default compose<GameProps, {}>(
  withGameStateHandlers,
  withTilesProps,
  onMoveHandler,
  afterMoveHandler,
  withLifecycle
)(Puzzle2048);
