import { Injectable } from '@nestjs/common';
import axios from 'axios';
import fetch from 'node-fetch';
import Unsplash, { toJson } from 'unsplash-js';
import Config from '../extra/index'
(global as any).fetch = fetch;
@Injectable()
export class PhotosService {
  private unsplash = new Unsplash({
    applicationId: Config.Unsplash.applicationId,
    secret: Config.Unsplash.secret
  });
  async getPhotos(query = {}) {
    let data = await this.unsplash.photos.getRandomPhoto({
      ...query
    });
    let jsonData = await toJson(data);
    return jsonData;
  }
}
