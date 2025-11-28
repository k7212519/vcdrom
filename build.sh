#!/usr/bin/bash

mkdir -p app

cp node_modules/vcd-stream/out/vcd.wasm app

cp src/vcdrom.html app/index.html
cp src/theme.css app
cp src/wave.svg app

./node_modules/.bin/browserify ./lib/vcdrom.js | ./node_modules/.bin/terser --compress -o app/vcdrom.js
