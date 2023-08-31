import { Nil } from "./Nil.js";

export function isNotNil<T>(value: T | Nil): value is T {
  return value !== undefined || value !== null;
}
