import { XY, Measured, Sizes } from "./measurements";
import { Boxed } from "./index";

// move elsewher once ready.
export type Color = string;

export type BackgroundColor = Color;

export type BackgroundAttachment = "scroll" | "fixed" | "local";

export type BackgroundClip = "border-box" | "padding-box" | "content-box";
export type BackgroundOrigin = "border-box" | "padding-box" | "content-box";

export type BackgroundRepeatValue = "space" | "repeat" | "no-repeat" | "round";
export type BackgroundRepeat = XY<BackgroundRepeatValue>;

export type BackgroundPosition = Boxed;

export type BackgroundSize =
  | "contain"
  | "cover"
  | XY<Measured<Sizes, number> | "auto">;

export type BackgroundImage = {
  attachment: BackgroundAttachment;
  clip: BackgroundClip;
  image: string;
  // origin ignored when attachement is fixed.
  origin: BackgroundOrigin;
  position: BackgroundPosition;
  size: BackgroundSize;
};

export type Background = BackgroundImage | BackgroundColor;
