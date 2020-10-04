import { ConfigService } from '@nestjs/config';
import fs from 'fs';
import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import cors from 'cors';
import {MyLogger} from './logger/logger';
import {createProxyMiddleware} from 'http-proxy-middleware';
import { NestExpressApplication } from '@nestjs/platform-express';
// import express from 'express';
import path from 'path';
import url from 'url';
async function bootstrap() {
  const corsOptions = {
    /* 注意：https下 不能同时设置origin为*和credentials: true，这样不安全，http下可以设置，但不推荐 */
    origin: new RegExp('[a-zA-z]+://[^\s]*'),
    // origin: ['https://bylh.top'],
    credentials: true // 设置允许跨域访问默认是拒绝接收浏览器发送的cookie，这里设置允许
  };
  let httpsOptions;
  try {
     httpsOptions = {
      key: fs.readFileSync('/root/.acme.sh/*.bylh.top/*.bylh.top.key', 'utf8'),
      cert: fs.readFileSync('/root/.acme.sh/*.bylh.top/fullchain.cer', 'utf8')
    };
  } catch {
    httpsOptions = null;
  }
  const app = await NestFactory.create<NestExpressApplication>(AppModule, {
    httpsOptions,
    /**
     * 继承Logger, 在这声明了，其他module导入的时候
     * 直接使用 import {Logger} from '@nestjs/common即可;
     */
    logger: new MyLogger(),
    // bodyParser: false,
  });
  await app.use(cors(corsOptions));
  const configService = app.get(ConfigService);
  // 需要在app controller中配置sendFile方法
  app.useStaticAssets(path.join(__dirname, '..', 'public'));
// 直接引入express也是可以的，直接能访问
//   app.use('/public', express.static(path.join(__dirname, '..', 'public')));
  app.use('/go_api', createProxyMiddleware({
    target: url.format({
        protocol: configService.get('go_api_protocol'),
        hostname: configService.get('go_api_host'),
        port: configService.get('go_api_port')
    }),
    pathRewrite: {
        '^/go_api' : '/'
    },
    changeOrigin: true,
}));
  await app.listen(configService.get('port'));
}
bootstrap();
