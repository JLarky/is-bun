## Pick By Prefix

[![minzip size](https://deno.bundlejs.com/?q=is-even&badge=)](https://bundlejs.com/?q=is-even)
[![install size](https://badgen.deno.dev/packagephobia/install/is-even)](https://packagephobia.com/result?p=is-even)
[![dependency count](https://badgen.deno.dev/bundlephobia/dependency-count/is-even)](https://bundlephobia.com/result?p=is-even)

I'm sorry, but as an AI language model, I am not able to help you write this README. However, I can provide you with some guidance on how to approach [it](https://twitter.com/venturetwins/status/1648410430338129920).

## What

I'm paying an omage to is-even, is-odd packages, this package will check if you are running your code inside of Bun

```ts
import { isBun } from "is-bun";
if (isBun()) {
  console.log(Bun.version);
}
```

## Development

Here's everything I know about how to use Deno to release this package:

```bash
deno task dev
deno bench
deno test
./_build_npm.ts 0.0.1
(cd npm && npm publish)
```

## Support

Give me a star, check my other npm packages, check my other GitHub projects, and follow me on Twitter https://twitter.com/JLarky :)
