import { Injectable } from '@nestjs/common';

@Injectable()
export class NewsService {
  private readonly newsArr: Object[] = [{title: '知乎', url: 'https://www.zhihu.com/'}];
  create(news: Object) {
    this.newsArr.push(news);
  }
  findAll(): Object[] {
    return this.newsArr;
  }
}
