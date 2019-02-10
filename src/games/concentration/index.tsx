import * as React from "react";
import { Card } from "./model";
import { FlipCard } from "./components";

type State = {
  cards: Card[];
  loading: boolean;
};

class Concentration extends React.Component<{}, State> {
  readonly state: State = {
    cards: [],
    loading: true
  };

  componentDidMount() {
    // TODO: implement getCards from service.
    const cards: Card[] = [];
    this.setState({
      cards,
      loading: false
    });
  }

  // TODO: dupplicate and shuffle cards.
  render() {
    const { loading, cards } = this.state;
    return (
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
              onClick={() => console.log("click")}
              key={card.id}
              content={card.svg}
            />
          ))
        )}
      </div>
    );
  }
}

export default Concentration;
