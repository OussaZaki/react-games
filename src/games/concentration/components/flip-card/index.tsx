import * as React from "react";
import { compose } from "recompose";
import LazyLoad from "react-lazyload";

import { FlipCardProps, Props, withStyleProps } from "./behavior";

import "./styles.scss";

const FlipCard: React.FC<FlipCardProps> = ({ onClick, content, className }) => (
  <div className={className} onClick={onClick}>
    <div className="flipcard-inner front">
      <LazyLoad height={200}>
        <img src={content} />
      </LazyLoad>
    </div>
    <div className="flipcard-inner back" />
  </div>
);

export default compose<FlipCardProps, Props>(withStyleProps)(FlipCard);
