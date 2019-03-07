import * as React from "react";
import { compose } from "recompose";

import { Header, Grid, TileContainer } from "./components";
import { GameProps } from "./model";
import { withGameStateHandlers, withTilesProps, withLifecycle, onMoveHandler, afterMoveHandler } from "./logic";

import "./styles.scss";

const Puzzle2048: React.FC<GameProps> = ({ tiles, score, gameWon }) => (
  <div>
    <Header score={score} bestScore={1024} />
    {gameWon && <h2>Congratulations !!</h2>}
    <div className="game-container">
      <Grid />
      <TileContainer tiles={tiles} />
    </div>
  </div>
);

export default compose<GameProps, {}>(
  withGameStateHandlers,
  withTilesProps,
  afterMoveHandler,
  onMoveHandler,
  withLifecycle
)(Puzzle2048);
