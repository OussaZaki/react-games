import * as React from "react";
import { compose } from "recompose";

import { GameProps } from "./model";
import { FlipCard } from "./components";
import { withGameStateHandlers, withLifecycle } from "./behavior";

const Concentration: React.FC<GameProps> = ({
  loading,
  cards,
  onCardClick
}) => (
  <div className="Concentration">
    <div className="game-title">
      <h2>Concentration</h2>
      <h4>Memory game with matching cards.</h4>
    </div>
    {loading ? (
      <div>Loading...</div>
    ) : (
      cards.map(card => (
        <FlipCard
          onClick={() => onCardClick(card.id)}
          key={card.id}
          content={card.svg}
          flipped={card.flipped}
          found={card.found}
        />
      ))
    )}
  </div>
);

export default compose<GameProps, {}>(
  withGameStateHandlers,
  withLifecycle
)(Concentration);