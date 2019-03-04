import { withProps } from "recompose";
import classNames from "classnames";

export type Props = {
  onClick: () => void;
  flipped: boolean;
  found: boolean;
  content: string;
};

export type WithProps = {
  className: string;
};

export type FlipCardProps = Props & WithProps;

export const newProps = (props: Props) => ({
  className: classNames("flipcard", {
    "flipped": props.flipped || props.found,
    "found": props.found
  })
});

export const withStyleProps = withProps(newProps);
