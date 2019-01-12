import {parse} from './parse';

describe('fisea.parse', () => {
  test('foo:foo bar:bar bar-baz:"bar baz" hoge', () => {
    const result = parse('foo:foo bar:bar bar-baz:"bar baz" hoge');
    expect(result).toHaveProperty('foo');
    expect(result).toHaveProperty('bar');
    expect(result).toHaveProperty('bar-baz');
    expect(result).toHaveProperty('barBaz');
    expect(result).not.toHaveProperty('baz');
    expect(result).toHaveProperty('_');
    expect(Object.keys(result).length).toBe(5);

    expect(result.foo).toMatchObject(['foo']);
    expect(result.bar).toMatchObject(['bar']);
    expect(result['bar-baz']).toMatchObject(['bar baz']);
    expect(result.barBaz).toMatchObject(['bar baz']);
    expect(result._).toMatchObject(['hoge']);
  });
});
