import { withProps } from "recompose";

import { GameProps } from "../model";
import { getTilesFromGrid } from "../helpers";

const withTilesProps = withProps<{}, GameProps>(({ grid }) => ({ tiles: getTilesFromGrid(grid) }));

export default withTilesProps;
