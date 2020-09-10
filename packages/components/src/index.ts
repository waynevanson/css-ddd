import { DataStyles } from "../../css-types/src";
import { readonlyRecord as RORC, either as E } from "fp-ts";

export type Meta = Record<string, any>;

/**
 * @summary
 * Truly abstract information about a component.
 */
export type ComponentData = {
  styles: DataStyles;
  events: ReadonlyArray<(...args: any[]) => void>;
  // basically props
  state: E.JsonRecord;
  init: E.JsonRecord;
  children: ReadonlyArray<ComponentData>;
};

// go to typescript JSX for declarations.
//
export interface JSXData {}

export interface JSXElement {
  (): JSXData;
}

export function jsxFactory(
  tag: string,
  props: Record<string, any>,
  ...children: any[]
) {}
