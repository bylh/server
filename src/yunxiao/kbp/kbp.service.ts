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
  async getKnowledgeModules() {
    return {
      _id: 111111,
      period: '高中',
      subject: '数学',
      children: [{
        id: '0',
        name: '0',
        children: [{
          id: '00',
          name: '00',
          children: [{
            id: '000',
            name: '000',
            knowledges: [{
              id: '0000',
              name: '集合的含义'
            }, {
              id: '0001',
              name: '三角函数'
            }]
          }]
        }]
      }]
    }
  }

  async getKnowledgeCategory() {
    return {
      _id: '0000',
      name: '三角函数的含义',
      period: '高中',
      subject: '数学',
      subdivisions: [{
        id: '0000',
        name: '三角函数的含义细分0'
      }, {
        id: '0001',
        name: '三角函数的含义细分1'
      }],

      target: [{
        id: '0000',
        name: '三角函数的含义对象0'
      }, {
        id: '0001',
        name: '三角函数的含义对象1'
      }],
    }
  }

}
