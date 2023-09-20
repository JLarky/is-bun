export function isBun(): boolean {
  // I didn't want to import bun-types package
  // @ts-ignore
  return typeof Bun !== "undefined";
}
