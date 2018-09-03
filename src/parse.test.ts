import {parse} from './parse';

describe('fisea.parse', () => {
  test('foo:foo bar:bar bar:bar2 hoge', () => {
    const result = parse<'foo' | 'bar'>('foo:foo bar:bar bar:bar2 hoge');
    expect(result).toHaveProperty('foo');
    expect(result).toHaveProperty('bar');
    expect(result).not.toHaveProperty('baz');
    expect(result).toHaveProperty('_');
    expect(Object.keys(result).length).toBe(3);

    expect(result.foo).toMatchObject(['foo'])
    expect(result.bar).toMatchObject(['bar', 'bar2']);
    expect(result._).toMatchObject(['hoge']);
  });
});