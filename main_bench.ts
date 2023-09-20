import { isBun } from "./mod.ts";

Deno.bench(function benchIsBun() {
  isBun();
});
