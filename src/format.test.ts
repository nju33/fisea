import {format} from './format';

describe('fisea.format', () => {
  test('{foo: ["foo"], bar: ["bar", "bar2"], _: ["hoge"]}', () => {
    const result = format({foo: ['foo'], bar: ['bar', 'bar2'], _: ['hoge']});
    expect(result).toBe('foo:foo bar:bar bar:bar2 hoge');
  });
});
