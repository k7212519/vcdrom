#!/usr/bin/bash

# 创建app目录
mkdir -p app

# 复制必要文件
cp node_modules/vcd-stream/out/vcd.wasm app
cp src/vcdrom.html app/index.html
cp src/*.woff2 app

echo "开发环境准备完成"
