import * as React from "react";
import { compose } from "recompose";

import { GameProps, Card } from "./model";
import { FlipCard } from "./components";
import {
  withGameStateHandlers,
  withCardsComparison,
  withGameFlow,
  withLifecycle
} from "./logic";

const _getFlipCards = (cards: Card[], clickHandler: (card: Card) => void) =>
  cards.map(card => (
    <FlipCard
      onClick={() => clickHandler(card)}
      key={card.id}
      content={card.svg}
      flipped={card.flipped}
      found={card.found}
    />
  ));

const Concentration: React.FC<GameProps> = ({
  loading,
  gameWon,
  cards,
  onCardClick
}) => (
  <div className="Concentration">
    <div className="header">
      <h2>Concentration</h2>
      <h4>Memory game with matching cards.</h4>
      {gameWon && <h3>Congrats!</h3>}
    </div>
    {loading ? <div>Loading...</div> : _getFlipCards(cards, onCardClick)}
  </div>
);

export default compose<GameProps, {}>(
  withGameStateHandlers,
  withCardsComparison,
  withGameFlow,
  withLifecycle
)(Concentration);
