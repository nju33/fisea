# Fisea

[![XO code style](https://img.shields.io/badge/code_style-XO-5ed9c7.svg)](https://github.com/sindresorhus/xo) [![Build Status](https://travis-ci.org/nju33/fisea.svg?branch=master)](https://travis-ci.org/nju33/fisea)

A parser like the search part of Github.

## Install

```sh
yarn add fisea
npm i -S fisea
```

## Usage

```js
//# es
// import Fisea from 'fisea';
//# common
// const Fisea = requrie('fisea');

const fisea = new Fisea(['foo', 'bar']);
const result = fisea.parse('aaa foo:hoge foo:fuga bar:piyo baz:hogehoge');
console.log(result);
// [
//    _: [ 'aaa', 'baz:hogehoge' ],
//   foo: [ 'hoge', 'fuga' ],
//   bar: [ 'piyo' ]
// ]
```

## API

- `constructor` keywords
- `parse` search text

## License

The MIT License (MIT)

Copyright (c) 2017 nju33 <nju33.ki@gmail.com>
