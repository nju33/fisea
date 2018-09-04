# Fisea

[![TypeScript](https://badges.frapsoft.com/typescript/code/typescript.svg?v=101)](https://github.com/ellerbrock/typescript-badges/)
[![fisea](https://img.shields.io/npm/v/fisea.svg)](https://www.npmjs.com/package/fisea)
[![CircleCI](https://circleci.com/gh/nju33/fisea.svg?style=svg)](https://circleci.com/gh/nju33/fisea)
[![code style: prettier](https://img.shields.io/badge/code_style-prettier-ff69b4.svg?style=flat-square)](https://github.com/prettier/prettier)

A parser like the search part of Github.

## Install

```sh
yarn add fisea
```

## Usage

### on nodejs

```ts
import * as fisea from 'fisea';

fisea.parse('foo:foo bar:bar bar-baz:"bar baz" hoge');
// {foo:["foo"], bar:["bar"], "bar-baz":["bar baz"], barBaz:["bar baz"], _:["hoge"]}
fisea.format({
  foo: ['foo'],
  bar: ['bar'],
  'bar-baz': ['bar baz'],
  barBaz: ['bar baz'],
  _: ['hoge']
});
// 'foo:foo bar:bar bar-baz:"bar baz" hoge'
```

### on browser

```html
<script src="https://unpkg.com/fisea/dist/fisea.umd.js"></script>
```

## Options

`separator` default`:`
