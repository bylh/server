import { Injectable } from '@nestjs/common';
import axios from 'axios';

@Injectable()
export class NewsService {
  private readonly newsArr: object[] = [{title: '知乎', url: 'https://www.zhihu.com/'}];
  private newsTypes: object[] = [];
  private news: object [] = [];
  create(news: object) {
    this.newsArr.push(news);
  }
  findAll(): object[] {
    return this.newsArr;
  }
  async getNews(id: string) {
    try {
      const res = await axios.request({
        url: 'https://tophub.fun:8080/GetTypeInfo',
        method: 'get',
        params: {id},
      });
      this.news = res.data.Data;
      return this.news;
    } catch (err) {
      throw err;
    }
  }
  async getNewsTypes() {
    try {
      const res = await axios.request({
        url: 'https://tophub.fun:8080/GetType',
        method: 'get',
        params: {},
      });
      this.newsTypes = res.data.Data;
      const filters = ['知乎', '知乎日报', 'V2EX', 'Segmentfault', 'GitHub', 'ReadHub', '虎扑', '豆瓣'].reverse();
      return this.newsTypes.sort((a, b) => filters.indexOf((b as any).title) -
      filters.indexOf((a as any).title));
    } catch (err) {
      throw err;
    }
  }
}
