export function isBun(): boolean {
  // I didn't want to import bun-types package
  // @ts-ignore
  return typeof Bun !== "undefined";
}

// Learn more at https://deno.land/manual/examples/module_metadata#concepts
if (import.meta.main) {
  console.log("In Deno isBun is", isBun());
}
