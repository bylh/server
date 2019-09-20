import { Injectable } from '@nestjs/common';
import axios from 'axios';

@Injectable()
export class NewsService {
  private readonly newsArr: Object[] = [{title: '知乎', url: 'https://www.zhihu.com/'}];
  private newsTypes: Object[] = [];
  private news: Object [] = [];
  create(news: Object) {
    this.newsArr.push(news);
  }
  findAll(): Object[] {
    return this.newsArr;
  }
  async getNews(id: String) {
    try {
      let res = await axios.request({
        url: 'https://www.printf520.com:8080/GetTypeInfo',
        method: 'get',
        params: {id},
      })
      this.news = res.data.Data;
      return this.news;
    } catch (err) {
      throw err;
    }
  }
  async getNewsTypes() {
    try {
      console.log('开始获取类型，调用外部api');
      let res = await axios.request({
        url: 'https://www.printf520.com:8080/GetType',
        method: 'get',
        params: {},
      })
      this.newsTypes = res.data.Data;
      console.log('获取成功')
      return this.newsTypes;
    } catch (err) {
      throw err;
    }
  }
}
