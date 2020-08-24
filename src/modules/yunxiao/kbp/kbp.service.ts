import { Injectable } from '@nestjs/common';
import { nodeInternals } from 'stack-utils';
import fs from 'fs';
import { diff } from 'deep-diff';
import {deepClone} from '../../../common/utils';

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
        chapters: [],
      }],
    }];
  }
  async getKnowledgeModules(transform = true) {
    if (!transform) {
      return this.modelData;
    }
    const data = deepClone(this.modelData);
    getModuleTree(data);
    return data;
  }

  async getKnowledgeCategory(knowId) {
    const know = findKnowById(this.modelData, knowId);
    return know;
  }
  async getDiffData(orgData, newData) {
    orgData = JSON.parse(fs.readFileSync('src/data/org.json', {encoding: 'utf8'}));
    newData = JSON.parse(fs.readFileSync('src/data/new.json', {encoding: 'utf8'}));

    const diffData = diff(orgData, newData);
    return {
      orgQue: orgData,
      newQue: newData,
    };
    return diffData;
  }
  async getKnowMethodGroupList(limit = 10, offset = 0) {
    const cloneData = deepClone(knowMethodGroupList);
    cloneData.list = (cloneData.list as any).slice(offset, offset + limit);
    cloneData.list.forEach(item => item.ctime = new Date());
    return cloneData;
  }
  async getKnowMethodGroupDetail(id = '') {
    return (knowMethodGroupList.list as any).find(item => item.id === Number(id));
  }
  async getKnowMethodGroupStatus(id = '') {
    const data = (knowMethodGroupList.list as any).find(item => item.id === Number(id));
    return {
      id: data ? data.id : '',
      status: !!(data && data.id),
      msg: data ? '可编辑' : '不可编辑',
    };
  }
}

function getModuleTree(node) {
  if (!node.children) {
    for (const item of node.knowledges) {
      delete item.know_methods;
      delete item.targets;
    }
    return;
  } else {
    for (const item of node.children) {
      getModuleTree(item);
    }
  }
}
// 遍历树，传入callback做节点处理
function findKnowById(node, id) {
  if (!node.children) {
    for (const item of node.knowledges) {
      console.log(item.id, id, item.id === id);
      if (item.id === id) {
        return item;
      }
    }
  } else {
    for (const item of node.children) {
      const result = findKnowById(item, id);
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
          know_methods: [{
            id: 898783784,
            name: '集合的含义细分0',
          }, {
            id: 932894832,
            name: '集合的含义细分1',
          }],

          targets: [{
            id: 4236271,
            name: '集合的含义对象0',
          }, {
            id: 458943895,
            name: '集合的含义对象1',
          }],
        }, {
          id: 37821378,
          name: '三角函数',
          know_methods: [{
            id: 312563621,
            name: '三角函数的含义细分0',
          }, {
            id: 361235612,
            name: '三角函数的含义细分1',
          }],

          targets: [{
            id: 3621732153,
            name: '三角函数的含义对象0',
          }, {
            id: 2613216736712,
            name: '三角函数的含义对象1',
          }],
        }],
      }],
    }],
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
          know_methods: [{
            id: 53325345,
            name: '不等式的含义细分0',
          }, {
            id: 33123131412,
            name: '不等式的含义细分1',
          }],

          targets: [{
            id: 93473247832,
            name: '不等式的含义对象0',
          }, {
            id: 89234378324,
            name: '不等式的含义对象1',
          }],
        }, {
          id: 261732154,
          name: '不等式的证明',
          know_methods: [{
            id: 5647576234,
            name: '不等式的证明细分0',
          }, {
            id: 3312631673216,
            name: '不等式的证明细分1',
          }],

          targets: [{
            id: 213215361,
            name: '不等式的证明对象0',
          }, {
            id: 35621356,
            name: '不等式的证明对象1',
          }],
        }],
      }],
    }],
  }, {
    id: 12424214124,
    name: '命题1级目录',
    children: [{
      id: 2132131241,
      name: '命题2级目录',
      children: [{
        id: 32131241352,
        name: '命题3级目录',
        knowledges: [{
          id: 2125856767,
          name: '命题的真假判断与应用',
          score: 1.37,
          chance: 0.2544,
          know_methods: [{
            id: 32134324151,
            name: '命题的真假判断与应用细分1',
          }, {
            id: 31241244214,
            name: '命题的真假判断与应用细分2',
          }],
          targets: [{
            id: 321321312,
            name: '命题的真假判断与应用对象1',
          }, {
            id: 321312312312,
            name: '命题的真假判断与应用对象2',
          }],
        }],
      }],
    }],
  }],
};

const knowMethodGroupList = {
  total_num: 11,
  list: [{
    id: 123213123,                         // 组id
    period: '高中',           // 学段
    subject: '数学',          // 学科
    name: '组合1',            // 组名
    children: [{
      name: '函数',
      id: 1241321324124,
    }, {
      name: '函数发打发打发很大方哈哈就发士大夫好尬发挥更大双方各哈撒给',
      id: 12413211324124,
    }, {
      name: '函数',
      id: 124132132131224124,
    }],
    ctime: new Date(),
  }, {
    id: 123424312123,                         // 组id
    period: '高中',           // 学段
    subject: '数学',          // 学科
    name: '组合1',            // 组名
    children: [{
      name: '函数',
      id: 1241141412424124,
    }],
    ctime: new Date(),
  }, {
    id: 123321313123,                         // 组id
    period: '高中',           // 学段
    subject: '数学',          // 学科
    name: '组合1',            // 组名
    children: [{
      name: '函数',
      id: 124545465124124,
    }],
    ctime: new Date(),
  }, {
    id: 34243121233123,                         // 组id
    period: '高中',           // 学段
    subject: '数学',          // 学科
    name: '组合1',            // 组名
    children: [{
      name: '函数',
      id: 1241643643624124,
    }],
    ctime: new Date(),
  }, {
    id: 1233231123,                         // 组id
    period: '高中',           // 学段
    subject: '数学',          // 学科
    name: '组合1',            // 组名
    children: [{
      name: '函数',
      id: 12412432432424124,
    }],
    ctime: new Date(),
  }, {
    id: 123131231223,                         // 组id
    period: '高中',           // 学段
    subject: '数学',          // 学科
    name: '组合1',            // 组名
    children: [{
      name: '函数',
      id: 124123243244124,
    }],
    ctime: new Date(),
  }, {
    id: 1231654747523,                         // 组id
    period: '高中',           // 学段
    subject: '数学',          // 学科
    name: '组合1',            // 组名
    children: [{
      name: '函数',
      id: 124124324324324124,
    }],
    ctime: new Date(),
  }, {
    id: 1234324123,                         // 组id
    period: '高中',           // 学段
    subject: '数学',          // 学科
    name: '组合1',            // 组名
    children: [{
      name: '函数',
      id: 124132124124545434,
    }],
    ctime: new Date(),
  }, {
    id: 123432432423123,                         // 组id
    period: '高中',           // 学段
    subject: '数学',          // 学科
    name: '组合1',            // 组名
    children: [{
      name: '函数',
      id: 1243213123124124,
    }],
    ctime: new Date(),
  }, {
    id: 123143243242323,                         // 组id
    period: '高中',           // 学段
    subject: '数学',          // 学科
    name: '组合1',            // 组名
    children: [{
      name: '函数',
      id: 124312321124124,
    }],
    ctime: new Date(),
  }, {
    id: 1231324324223,                         // 组id
    period: '高中',           // 学段
    subject: '数学',          // 学科
    name: '组合1',            // 组名
    children: [{
      name: '函数',
      id: 12241321324124,
    }],
    ctime: new Date(),
  }, {
    id: 1234324234123,                         // 组id
    period: '高中',           // 学段
    subject: '数学',          // 学科
    name: '组合1',            // 组名
    children: [{
      name: '函数',
      id: 1244324124124,
    }],
    ctime: new Date(),
  }],
};
