import {format} from './format';

describe('fisea.format', () => {
  // tslint:disable-next-line:max-line-length
  it('have -key and lower-camel-case-key so same name', () => {
    const result = format({
      foo: ['foo'],
      bar: ['bar'],
      'bar-baz': ['bar baz'],
      barBaz: ['bar baz'],
      _: ['hoge'],
    });
    expect(result).toBe('foo:foo bar:bar bar-baz:"bar baz" hoge');
  });

  it('only have -key', () => {
    const result = format({
      foo: ['foo'],
      bar: ['bar'],
      'bar-baz': ['bar baz'],
      _: ['hoge'],
    });
    expect(result).toBe('foo:foo bar:bar bar-baz:"bar baz" hoge');
  });

  it('only have lower-camel-case-key', () => {
    const result = format({
      foo: ['foo'],
      bar: ['bar'],
      barBaz: ['bar baz'],
      _: ['hoge'],
    });
    expect(result).toBe('foo:foo bar:bar bar-baz:"bar baz" hoge');
  });
});
