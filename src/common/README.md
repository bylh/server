# 整理出一套通用的知识体系

* 生成配置文件
  tsc --init
  npm init
* ts文件运行
  全局安装ts, tsc -v查看版本
  tsc test.ts编译
  tsc 或者tsc -p . 根据当前tsconfig编译项目中所有的文件
  tsc编译当个文件会忽略tsconfig
  ts-node 从8.0开始不能支持全局typescript，需要本地安装ts-node和typescript
  