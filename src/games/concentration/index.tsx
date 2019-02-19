import * as React from "react";
import { GameProps } from "./model";
import { FlipCard } from "./components";

const Concentration: React.FC<GameProps> = ({
  loading,
  cards,
  handleCardClick
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
          onClick={() => handleCardClick(card.id)}
          key={card.id}
          content={card.svg}
        />
      ))
    )}
  </div>
);

export default Concentration;
