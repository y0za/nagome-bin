# nagome-bin

[![npm version](https://badge.fury.io/js/nagome-bin.svg)](https://badge.fury.io/js/nagome-bin) [![Build Status](https://travis-ci.org/y0za/nagome-bin.svg?branch=master)](https://travis-ci.org/y0za/nagome-bin)

> Binary wrapper for [Nagome](https://github.com/diginatu/nagome).

Nagome is NicoLive Comment Viewer which has no UI written in Golang. When you use Nagome from Node.js, you can get its binary through npm without installing individually.

## Installation
```
npm install nagome-bin
```

## Usage
CLI
```
$(npm bin)/nagome
```

Node.js
```js
const execFile = require('child_process').execFile;
const nagome = require('nagome-bin');

execFile(nagome, ['-h'], (error, stdout) => {
  console.log(stdout);
});
```

## How to release
`npm publish` is automated by Travis CI.
```sh
git checkout master
git pull
npm version <specify verion here> -m "Update version %s"
git push origin master
git push origin v$(node -p 'require("./package.json").version')
```

## License
MIT License


