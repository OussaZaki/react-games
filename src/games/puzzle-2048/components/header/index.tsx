import * as React from "react";

import "./styles.scss";

type Props = {
  score: number;
  bestScore: number;
};

const Header: React.FC<Props> = ({ score, bestScore }) => (
  <div className="header">
    <h1 className="title">2048</h1>
    <div className="scores-container">
      <div className="score">Score: {score}</div>
      <div className="best-score">Best Score: {bestScore}</div>
    </div>
  </div>
);

export default Header;
