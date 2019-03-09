import * as React from "react";
import { createPortal } from "react-dom";

const ESC = 27;

type Props = {
  klarnaLogo: boolean;
  leftIconAriaLabel: "Back";
  onClose: () => void;
  onBack: () => void;
  onBackgroundClick: () => void;
};

type State = {
  el: HTMLDivElement;
};

export default class Dialog extends React.Component<Props, State> {
  readonly state: State = {
    el: this.createDialogDiv()
  };

  componentDidMount() {
    window.addEventListener("keydown", this.escape);

    document.body.appendChild(this.state.el);
  }

  componentWillUnmount() {
    window.removeEventListener("keydown", this.escape);

    document.body.removeChild(this.state.el);
  }

  escape = (event: KeyboardEvent) => {
    if (event.keyCode === ESC) {
      this.props.onClose();
    }
  };

  createDialogDiv() {
    const el = document.createElement("div");
    el.setAttribute("id", "dialog-div");
    return el;
  }

  render() {
    const { el } = this.state;
    return createPortal(<div {...this.props} />, el);
  }
}
