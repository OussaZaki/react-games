import * as React from "react";
import { Header, Grid } from "./components";

const Puzzle2048: React.FC = () => (
  <div className="2048">
    <Header score={32} bestScore={1024} />
    <Grid />
    <div>Footer</div>
  </div>
);

export default Puzzle2048;
