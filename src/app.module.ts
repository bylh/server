import { ToolsController } from './modules/tools/tools.controller';
import { ToolsService } from './modules/tools/tools.service';
import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { NewsController } from './modules/news/news.controller';
import { NewsService } from './modules/news/news.service';
import { PhotosModule } from './modules/photos/photos.module';
import { DownloadModule } from './modules/download/download.module';
import { DownloadController } from './modules/download/download.controller';
import { DownloadService } from './modules/download/download.service';
import configuration from './config/configuration';

@Module({
  imports: [ConfigModule.forRoot({
      isGlobal: true,
      load: [configuration],
      envFilePath: ['.env'],
  }), 
  PhotosModule, DownloadModule],
  controllers: [AppController, NewsController, DownloadController, ToolsController],
  providers: [AppService, NewsService, DownloadService, ToolsService],
})
export class AppModule {}
