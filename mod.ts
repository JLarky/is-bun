export function isBun(): boolean {
  // I didn't want to import bun-types package
  // @ts-ignore
  return typeof Bun !== "undefined";
}

export function printIsBun() {
  if (isBun()) {
    console.log("Buntime runtime!");
  } else {
    console.log("It's not Bun, hun.");
  }
}
