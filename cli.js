#!/usr/bin/env node
var spawn = require('child_process').spawn;

var args = process.argv.slice(2);
var bin = require('./');

if (bin === null) {
  throw new Error('Platform not supported.');
}

var nagome = spawn(bin, args, { stdin: 'inherit' });

nagome.stderr.on('data', function (data) {
  process.stderr.write(data.toString('utf8'));
});
nagome.stdout.on('data', function (data) {
  process.stdout.write(data.toString('utf8'));
});
nagome.on('exit', process.exit);
