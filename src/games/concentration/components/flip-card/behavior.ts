import { withProps } from "recompose";

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
  className: `flipcard ${props.found ? "flipped found" : props.flipped ? "flipped" : ""}`
});

export const withStyleProps = withProps(newProps);
