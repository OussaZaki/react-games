import * as React from "react";

import "./styles.scss";

type Props = {
  message?: string;
};

const Loader: React.FC<Props> = ({ message }) => (
  <div className="loader-container">
    <span className="loader" />
    <span className="message" >{message}</span>
  </div>
);

export default Loader;
