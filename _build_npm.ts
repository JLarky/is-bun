#!/usr/bin/env -S deno run --allow-read --allow-write --allow-net --allow-env --allow-run
// Copyright 2018-2022 the oak authors. All rights reserved. MIT license.

/**
 * This is the build script for building npm package.
 *
 * @module
 */

import { build, emptyDir } from "https://deno.land/x/dnt@0.38.1/mod.ts";

async function start() {
  await emptyDir("./npm");

  await build({
    entryPoints: [
      "./mod.ts",
      {
        kind: "bin",
        name: "is-bun",
        path: "./cli.ts",
      },
    ],
    outDir: "./npm",
    shims: {},
    test: false,
    typeCheck: "both",
    compilerOptions: {
      importHelpers: false,
      sourceMap: true,
      target: "ES2021",
      lib: ["esnext", "dom", "dom.iterable"],
    },
    package: {
      name: "is-bun",
      version: Deno.args[0],
      description: "Return true if you are running in Bun.",
      license: "MIT",
      keywords: ["bun"],
      engines: {
        node: ">=8.0.0",
      },
      repository: {
        type: "git",
        url: "git+https://github.com/JLarky/is-bun.git",
      },
      bugs: {
        url: "https://github.com/JLarky/is-bun/issues",
      },
      dependencies: {},
      devDependencies: {},
    },
  });

  await Deno.copyFile("LICENSE", "npm/LICENSE");
  await Deno.copyFile("README.md", "npm/README.md");
}

start();
