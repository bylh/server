import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { NewsController } from './modules/news/news.controller';
import { NewsService } from './modules/news/news.service';
import { YunxiaoModule } from './modules/yunxiao/yunxiao.module';
import { PhotosModule } from './modules/photos/photos.module';

@Module({
  imports: [YunxiaoModule, PhotosModule],
  controllers: [AppController, NewsController],
  providers: [AppService, NewsService],
})
export class AppModule {}
