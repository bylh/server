import fs from 'fs';
import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import cors from 'cors';
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
  const app = await NestFactory.create(AppModule, {
    httpsOptions
  });
  await app.use(cors(corsOptions));
  await app.listen(3001);
}
bootstrap();
