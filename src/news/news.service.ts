import { Injectable } from '@nestjs/common';

@Injectable()
export class NewsService {
  private readonly newsArr: string[] = [];
  create(news: string) {
    this.newsArr.push(news);
  }
  findAll(): string[] {
    return this.newsArr;
  }
}
