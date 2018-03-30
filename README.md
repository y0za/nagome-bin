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

## Dependencies
These are the list of libraries that [Nagome v0.0.6](https://github.com/diginatu/nagome/tree/v0.0.6) depends on. Please refer to the [official information](https://github.com/diginatu/nagome/tree/master#dependencies) if you want to know the latest Nagome dependencies.

* diginatu/nagome : MIT License
    + gopkg.in/yaml.v2 : Apache Licence 2.0
    + diginatu/nagome/nicolive
        - gopkg.in/xmlpath.v2 : LGPLv3
        - gopkg.in/yaml.v2 : Apache Licence 2.0
        - github.com/syndtr/goleveldb : 2-Clause BSD License
