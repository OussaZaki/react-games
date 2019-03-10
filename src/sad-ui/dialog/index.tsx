import * as React from "react";
import { DialogProps } from "./behavior";


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

const Dialog: React.FC<DialogProps> = () => (
  <div>
    <h2>This is a dialog!</h2>
  </div>
);
