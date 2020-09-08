export type Measured<E, A> = {
  value: A;
  unit: E;
};

export type BoxEdges<A> = {
  top: A;
  right: A;
  bot: A;
  left: A;
};

export type BoxVertices<A> = {
  topRight: A;
  botRight: A;
  botLeft: A;
  topLeft: A;
};

export type XY<A> = {
  x: A;
  y: A;
};

export type GlobalValues = "inherit" | "initial" | "unset";

export type Relative = "rem" | "em" | "vh" | "vw";
export type Absolute = "px" | "pt" | "cm" | "in" | "mm" | "qmm";
export type Sizes = Relative | Absolute;
