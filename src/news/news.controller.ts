import { NewsService } from './news.service';
import { Controller, Get, Query, Param, Post, Body, HttpCode } from '@nestjs/common';

@Controller('news')
export class NewsController {
  private newsServ: NewsService;
  constructor(newsServ: NewsService) {
    this.newsServ = newsServ;
  }
  @Get()
  async getNews(@Query() query, @Param() params) {
    console.log(query, params);
    return this.newsServ.getNews(query.id);
  }
  @Get('types')
  async getNewsTypes() {
    return await this.newsServ.getNewsTypes();
  }

  // // daily/:id
  // @Get('test')
  // findAll(@Query() query, @Param() params): Object[] {
  //   console.log(query, params);
  //   return this.newsServ.findAll();
  // }

  // @Post('test')
  // @HttpCode(201)
  // async create(@Body() createNews: Object) {
  //   console.log(createNews);
  //   this.newsServ.create((createNews as any).news);
  // }
}
