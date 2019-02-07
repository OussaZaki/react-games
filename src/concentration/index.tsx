import * as React from "react";
import { Card } from "./model";
import { FlipCard } from "./components";

type State = {
  cards: Card[];
  loading: boolean;
};

class App extends React.Component<{}, State> {
  readonly state: State = {
    cards: [],
    loading: true
  };

  componentDidMount() {
    // TODO: implement getCards from service.
    const cards: Card[] = [
        {
            id: 1,
            content: "apple"
        },
        {
            id: 2,
            content: "orange"
        },
        {
            id: 3,
            content: "pineapple"
        },
    ];
    this.setState({
      cards,
      loading: false
    });
  }

  // TODO: dupplicate and shuffle cards.
  render() {
    const { loading, cards } = this.state;
    return (
      <div className="App">
        {loading ? (
          <div>Loading...</div>
        ) : (
          cards.map(card => (
            <FlipCard
              onClick={() => console.log("click")}
              key={card.id}
              content={card.content}
            />
          ))
        )}
      </div>
    );
  }
}

export default App;
