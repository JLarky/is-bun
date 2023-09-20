import { isBun } from "./main.ts";

Deno.bench(function benchIsBun() {
  isBun();
});
