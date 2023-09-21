## Is Bun

[![minzip size](https://deno.bundlejs.com/?q=is-bun&badge=)](https://bundlejs.com/?q=is-bun)
[![install size](https://badgen.deno.dev/packagephobia/install/is-bun)](https://packagephobia.com/result?p=is-bun)
[![dependency count](https://badgen.deno.dev/bundlephobia/dependency-count/is-bun)](https://bundlephobia.com/result?p=is-bun)

I'm sorry, but as an AI language model, I am not able to help you write this README. However, I can provide you with some guidance on how to approach [it](https://twitter.com/venturetwins/status/1648410430338129920).

## Why

Did you know that when you run `bunx is-bun` it will use Node runtime? (Because of the `#!/usr/bin/env node` line in the `esm/cli.js` file.) You need to run `bunx --bun is-bun` to force Bun runtime.

And sometimes you just want to debug what runtime you are using. And it could be as easy as:

```ts
import { printIsBun } from "is-bun";
printIsBun();
```

## What

The basics are pretty simple:

```ts
import { isBun } from "is-bun";
if (isBun()) {
  console.log("You have Bun", Bun.version);
} else {
  console.log("Not Bun, No Fun!");
}
```

Bun just for fun I made `is-bun` executable so:

```bash
deno run npm:is-bun # or deno run https://deno.land/x/is_bun/cli.ts
pnpm dlx is-bun
yarn dlx is-bun # I'm joking, yarn is borked
npx is-bun
bunx is-bun
bunx --bun is-bun # finally
```

## How

This was created as a part of the [tutorial](#how-to-create-an-npm-package).

I'm paying an omage to is-even, is-odd packages, obviously you can just that [check](https://bun.sh/guides/util/detect-bun) yourself. Here's what I would have recommended to use in a real project:

```ts
// utils/is-bun.ts
const isBun = typeof Bun !== "undefined";
```

## Development

Here's everything I know about how to use Deno to release this package:

```bash
deno task dev
deno bench
deno test
# to publish to npm
./_build_npm.ts 0.0.1
(cd npm && npm publish)
# for releases and publishing to deno.land/x
git tag v0.0.1
git push --tags
```

## Support

Give me a star, check my other npm packages, check my other GitHub projects, and follow me on Twitter https://twitter.com/JLarky :)

## How to create an npm package

[Youtube Tutorial on How to Create a modern npm package with Deno and DNT](https://youtube.com/live/A19Jvot9hI4)
