# fisea

[![github](https://badgen.net/badge//nju33,fisea/000?icon=github&list=1)](https://github.com/nju33/fisea)
[![npm:version](https://badgen.net/npm/v/fisea?icon=npm&label=)](https://www.npmjs.com/package/fisea)
[![typescript](https://badgen.net/badge/lang/typescript/0376c6?icon=npm)](https://www.typescriptlang.org/)
[![ci:status](https://badgen.net/circleci/github/nju33/fisea)](https://circleci.com/gh/nju33/fisea)
[![document:typedoc](https://badgen.net/badge/document/typedoc/9602ff)](https://docs--fisea.netlify.com/)
[![license](https://badgen.net/npm/license/fisea)](https://github.com/nju33/fisea/blob/master/LICENSE)
[![browserslist](https://badgen.net/badge/browserslist/chrome,edge/ffd539?list=1)](https://browserl.ist/?q=last+1+chrome+version%2C+last+1+edge+version)
[![code style:prettier](https://badgen.net/badge//prettier/ff69b3?label=code%20style)](https://github.com/prettier/prettier)

## Usage

````ts
/** to prepare of using this
 *
 * ```sh
 * yarn add fisea
 * ```
 */
import {parse, format} from 'fisea';
````

or

```html
<script src="https://unpkg.com/fisea/fisea.js"></script>
<script>
  // Can use the `fisea` here.
</script>
```

## Example by TypeScript

```ts
console.log(parse('foo:foo bar:bar bar-baz:"bar baz" hoge'));
// {foo:["foo"], bar:["bar"], "bar-baz":["bar baz"], barBaz:["bar baz"], _:["hoge"]}

console.log(
  fisea.format({
    foo: ['foo'],
    bar: ['bar'],
    'bar-baz': ['bar baz'],
    barBaz: ['bar baz'],
    _: ['hoge'],
  }),
);
// 'foo:foo bar:bar bar-baz:"bar baz" hoge'
```

[![Edit fisea](https://codesandbox.io/static/img/play-codesandbox.svg)](https://codesandbox.io/s/v68pj5ml6y?module=%2Fsrc%2Findex.ts)
