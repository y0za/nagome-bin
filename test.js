import test from 'ava';
import pify from 'pify';
import { execFile } from 'child_process';
import { version } from './package.json';

test('check nagome version', async t => {
  const output = await pify(execFile)('./cli.js', ['-v']);
  const columns = output.trim().split(/\s+/);
  t.true(columns.length >= 2);
  t.is(columns[1], version);
})


