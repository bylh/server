import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { NewsController } from './news/news.controller';
import { NewsService } from './news/news.service';
import { YunxiaoModule } from './yunxiao/yunxiao.module';
import { PhotosModule } from './photos/photos.module';

@Module({
  imports: [YunxiaoModule, PhotosModule],
  controllers: [AppController, NewsController],
  providers: [AppService, NewsService],
})
export class AppModule {}
