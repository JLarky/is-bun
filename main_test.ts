import { assertEquals } from "https://deno.land/std@0.195.0/testing/asserts.ts";
import { isBun } from "./main.ts";

Deno.test(function bunTest() {
  assertEquals(isBun(), false);
});
