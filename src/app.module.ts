import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { NewsController } from './modules/news/news.controller';
import { NewsService } from './modules/news/news.service';
import { PhotosModule } from './modules/photos/photos.module';
import { DownloadModule } from './modules/download/download.module';
import { DownloadController } from './modules/download/download.controller';
import { DownloadService } from './modules/download/download.service';


@Module({
  imports: [PhotosModule, DownloadModule],
  controllers: [AppController, NewsController, DownloadController],
  providers: [AppService, NewsService, DownloadService],
})
export class AppModule {}
