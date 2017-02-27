#!/usr/bin/env node

var fs = require('fs')
var yoyoify = require('yo-yoify')

if (require.main === module) {
  process.stdin.on('readable', function () {
    process.stdin
      .pipe(yoyoify())
      .pipe(process.stdout)
  })
} else {
  module.exports = parse
}

function parse (srcPath, outPath) {
  var file = fs.createReadStream(srcPath)
  var stream = file.pipe(yoyoify(srcPath))
  stream.pipe(fs.createWriteStream(outPath))
}

// var srcPath = argv.src
// var outPath = argv.out

// if (!srcPath || !outPath) {
//  throw new Error('Source and destination paths must be specified with --src and --out')
// }
