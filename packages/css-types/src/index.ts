import { BoxEdges, Measured, Sizes } from "./measurements";
import { Background } from "./background";

export type Boxed = BoxEdges<Measured<Sizes, number>>;

export type Styles = {
  padding: Boxed;
  margin: Boxed;
  background: Background;
};
