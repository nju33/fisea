import {format} from './format';

describe('fisea.format', () => {
  // tslint:disable-next-line:max-line-length
  test('{foo:["foo"], bar:["bar"], "bar-baz":["bar baz"], barBaz:["bar baz"], _:["hoge"]}', () => {
    const result = format({
      foo: ['foo'],
      bar: ['bar'],
      'bar-baz': ['bar baz'],
      barBaz: ['bar baz'],
      _: ['hoge']
    });
    expect(result).toBe('foo:foo bar:bar bar-baz:"bar baz" hoge');
  });
});
