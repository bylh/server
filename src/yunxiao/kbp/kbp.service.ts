import { Injectable } from '@nestjs/common';

@Injectable()
export class KbpService {
  private modelData = moduleData;
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
    return moduleData;
  }

  async getKnowledgeCategory(know_id) {
    let know = findKnowById(this.modelData, know_id);
    console.log('获取knowledge', know);
    return know;
  }
}

// 遍历树，传入callback做节点处理
function findKnowById(node, id) {
  if (!node.children) {
    for (let item of node.knowledges) {
      console.log(item.id, id, item.id === id);
      if (item.id === id) {
        return item
      }
    }
  } else {
    for (let item of node.children) {
      let result = findKnowById(item, id);
      if (result != null) {
        return result;
      }
    }
  }
}


const moduleData = {
  id: 3126736213,
  period: '高中',
  subject: '数学',
  children: [{
    id: 12332321,
    name: '集合1级目录',
    children: [{
      id: 3213312,
      name: '集合2级目录',
      children: [{
        id: 32121323213,
        name: '集合3级目录',
        knowledges: [{
          id: 2147418111,
          name: '集合的含义',
          subdivisions: [{
            id: 898783784,
            name: '集合的含义细分0'
          }, {
            id: 932894832,
            name: '集合的含义细分1'
          }],
    
          targets: [{
            id: 4236271,
            name: '集合的含义对象0'
          }, {
            id: 458943895,
            name: '集合的含义对象1'
          }]
        }, {
          id: 37821378,
          name: '三角函数',
          subdivisions: [{
            id: 312563621,
            name: '三角函数的含义细分0'
          }, {
            id: 361235612,
            name: '三角函数的含义细分1'
          }],
    
          targets: [{
            id: 3621732153,
            name: '三角函数的含义对象0'
          }, {
            id: 2613216736712,
            name: '三角函数的含义对象1'
          }]
        }]
      }]
    }]
  }, {
    id: 356123562,
    name: '不等式1级目录',
    children: [{
      id: 2132414214,
      name: '不等式2级目录',
      children: [{
        id: 213213412432,
        name: '不等式三级目录',
        knowledges: [{
          id: 321332133213,
          name: '不等式的含义',
          subdivisions: [{
            id: 53325345,
            name: '不等式的含义细分0'
          }, {
            id: 33123131412,
            name: '不等式的含义细分1'
          }],
    
          targets: [{
            id: 93473247832,
            name: '不等式的含义对象0'
          }, {
            id: 89234378324,
            name: '不等式的含义对象1'
          }]
        }, {
          id: 261732154,
          name: '不等式的证明',
          subdivisions: [{
            id: 5647576234,
            name: '不等式的证明细分0'
          }, {
            id: 3312631673216,
            name: '不等式的证明细分1'
          }],
    
          targets: [{
            id: 213215361,
            name: '不等式的证明对象0'
          }, {
            id: 35621356,
            name: '不等式的证明对象1'
          }]
        }]
      }]
    }]
  }]
};
