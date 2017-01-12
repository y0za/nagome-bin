import test from 'ava';
import pify from 'pify';
import compareVersions from 'compare-versions'
import { execFile } from 'child_process';
import { version } from './package.json';

test('check nagome version', async t => {
  const output = await pify(execFile)('./cli.js', ['-v']);
  const columns = output.trim().split(/\s+/);
  t.true(columns.length >= 2);
  if (compareVersions(version, '0.0.3') === -1) {
    // 'Nagome   0.0.1' is output by nagome version 0.0.2
    // https://github.com/diginatu/nagome/blob/v0.0.2/main.go#L13
    t.is(columns[1], '0.0.1');
  } else {
    t.is(columns[1], `v${version}`);
  }
})


