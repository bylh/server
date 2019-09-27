import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { NewsController } from './news/news.controller';
import { NewsService } from './news/news.service';
import { YunxiaoModule } from './yunxiao/yunxiao.module';

@Module({
  imports: [YunxiaoModule],
  controllers: [AppController, NewsController],
  providers: [AppService, NewsService],
})
export class AppModule {}
