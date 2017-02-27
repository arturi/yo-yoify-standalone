# yo-yoify-standalone

Useful when you want to use [yo-yoify](https://github.com/shama/yo-yoify) to

> transform choo, yo-yo, or bel template strings into pure and fast document calls.

but can’t, or don’t want to, use browserify.

I run this before running Babel transforms. See also: https://github.com/goto-bus-stop/babel-plugin-yo-yoify

# Usage

## CLI

```sh
npm install yo-yoify-standalone --global

cat src/file.js | ./yoyoify-standalone.js > lib.yoyoified/file.js
```

## In a module

```sh
npm install yo-yoify-standalone --save
```

```js
var yoyoify = require('yo-yoify-standalone')

yoyoify('src/script.js', 'dist/script.js')
```
