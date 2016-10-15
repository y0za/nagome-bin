# nagome-bin

[![Build Status](https://travis-ci.org/y0za/nagome-bin.svg?branch=master)](https://travis-ci.org/y0za/nagome-bin)

> Binary wrapper for [Nagome](https://github.com/diginatu/nagome).

Nagome is NicoLive Comment Viewer which has no UI written in Golang. When you use Nagome from Node.js, you can get its binary through npm without installing individually.

## How to release
```sh
git checkout master
git pull
# You should update version in package.json before execute 'make'
make
git tag v$(node -p 'require("./package.json").version')
git push v$(node -p 'require("./package.json").version')
npm publish
```

## License
MIT License


