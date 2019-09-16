import { NewsService } from './news.service';
import { Controller, Get, Query, Param, Post, Body, HttpCode } from '@nestjs/common';

@Controller('news')
export class NewsController {
  private newsServ: NewsService;
  constructor(newsServ: NewsService) {
    this.newsServ = newsServ;
  }
  // daily/:id
  @Get()
  findAll(@Query() query, @Param() params): Object[] {
    console.log(query, params);
    return this.newsServ.findAll();
  }

  @Post()
  @HttpCode(201)
  async create(@Body() createNews: Object) {
    console.log(createNews);
    this.newsServ.create((createNews as any).news);
  }
}
