
import * as React from "react";
import { compose } from "recompose";
import { FlipCardProps, Props, withStyleProps } from "./behavior";

import "./styles.css";

const FlipCard: React.FC<FlipCardProps> = ({
  onClick,
  content,
  classNames
}) => (
  <div className={classNames} onClick={onClick}>
    <div className="front">
      <div className="child">{content}</div>
    </div>
    <div className="back" />
  </div>
);

export default compose<FlipCardProps, Props>(
  withStyleProps
)(FlipCard);
