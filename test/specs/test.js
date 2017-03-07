import test from 'ava';
import Fisea from '../../dist/fisea.umd';

test('fisea', t => {
  const fisea = new Fisea(['foo', 'bar']);
  t.is(fisea.keywords[0], 'foo');
  t.is(fisea.keywords[1], 'bar');

  const result = fisea.parse('aaa foo:hoge foo:fuga bar:piyo baz:hogehoge')
  console.log(result);
  t.is(result._.length, 2);
  t.is(result._[0], 'aaa');
  t.is(result._[1], 'baz:hogehoge');
  t.is(result.foo.length, 2);
  t.is(result.foo[0], 'hoge');
  t.is(result.foo[1], 'fuga');
  t.is(result.bar.length, 1);
  t.is(result.bar[0], 'piyo');
});
