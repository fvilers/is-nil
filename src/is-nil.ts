import { Nil } from "./Nil.js";

export function isNil<T>(value: T | Nil): value is Nil {
  return value === undefined || value === null;
}
