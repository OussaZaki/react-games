import * as React from "react";
import "./flipCard.css";

type Props = {
  onClick: () => void;
  flipped: boolean;
  found: boolean;
  content: string;
};

type State = {
  isFlipped: boolean;
  isFound: boolean;
};

class FlipCard extends React.Component<Props, State> {
  static defaultProps = {
    flipped: false,
    found: false,
    content: "Front"
  };

  readonly state: State = {
    isFlipped: this.props.flipped,
    isFound: this.props.found
  };

  handleClick = () => {
    this.props.onClick();
    this.setState({
      isFlipped: !this.state.isFlipped
    });
  };

  cardStyle = () => {
    return `flipcard ${this.state.isFound ? "flipped found" : (this.state.isFlipped ?   "flipped" : "")}`;
  }

  render() {
    const { handleClick, cardStyle } = this;
    const { content } = this.props;

    return (
      <div className={cardStyle()} onClick={handleClick}>
        <div className="front">
          <div className="child">{content}</div>
        </div>
        <div className="back" />
      </div>
    );
  }
}

export default FlipCard;