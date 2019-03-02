import * as React from "react";

type Props = {
  score: number;
  bestScore: number;
};

const Header: React.FC<Props> = ({ score, bestScore }) => (
  <div className="header">
    <h1 className="title">2048</h1>
    <div className="scores-container">
      <div className="score">{score}</div>
      <span>&nbsp;</span>
      <div className="best-score">{bestScore}</div>
    </div>
  </div>
);

export default Header;
