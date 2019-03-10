import { FC } from "react";

type Props = {
  id: string; // Specify the DOM element ID of the top-level node.
  children: FC;
  className: string;
  modalHeading: string;
  modalLabel: string;
  secondaryButtonText: string;
  primaryButtonText: string;
  isPrimaryButtonDisabled: boolean;
  shouldSubmitOnEnter: boolean;
};

type State = {
  isOpen: boolean;
};

type Handlers = {
  onClose: () => void;
  onSubmit: () => void;
  onSecondarySubmit: () => void;
  onKeyDown: () => void;
};

export type DialogProps = Props & State & Handlers;

const ESC = 27;
const ENTER = 13;

const onKeyDown = (props: DialogProps) => (event: KeyboardEvent) => {
  if (event.which === ESC) {
    props.onClose();
  }
  if (event.which === ENTER && props.shouldSubmitOnEnter) {
    props.onSubmit();
  }
};

const clickOutside = (props: DialogProps) => (event: MouseEvent) => {
  if (
    true // check click outside here.
  ) {
    props.onClose();
  }
};
