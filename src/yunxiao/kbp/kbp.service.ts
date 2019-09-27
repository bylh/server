import { Injectable } from '@nestjs/common';

@Injectable()
export class KbpService {
  async getChapters() {
    return [{
      id: '0',
      name: '0',
      chapters: [{
        id: '00',
        name: '00',
        chapters: []
      }]
    }]
  }
}
