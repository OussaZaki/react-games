import { withProps } from "recompose";
import classNames from "classnames";

import { Position } from "../../model";

export type Props = {
  position: Position;
  value: number;
};

export type WithProps = {
  className: string;
};

export type TileProps = Props & WithProps;

const _positionClassName = (position: Position) =>
  `tile-position-${position.x + 1}-${position.y + 1}`;

const _valueClassName = (value: number) => `tile-${value}`;

export const newProps = (props: Props) => ({
  className: classNames(
    "tile",
    _positionClassName(props.position),
    _valueClassName(props.value)
  )
});

export const withStyleProps = withProps(newProps);
