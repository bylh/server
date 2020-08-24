import { Injectable } from '@nestjs/common';
import {deepClone} from '../../../../common/utils';

@Injectable()
export class KbApiService {
    async getElementCategory(limit = 10, offset = 0) {
        const cloneData = deepClone(categoryData);
        cloneData.list = (cloneData.list as any).slice(offset, offset + limit);
        (cloneData.list as any).forEach(item => {
            delete item.children;
        });
        return cloneData;
    }
    async getElementCategoryDetail(id: number | string) {
        return (categoryData.list as any).find(item => item.id === id);
    }

    async getKnowMethodGroupList(limit = 10, offset = 0) {
        const cloneData = deepClone(knowMethodGroupList);
        cloneData.list = (cloneData.list as any).slice(offset, offset + limit);
        cloneData.list.forEach(item => item.ctime = new Date());
        return cloneData;
    }
}

const categoryData = {
    total_num: 15,
    list: [{
        id: '21412412',
        name: '类别1',
        children: [{
           id: '32145435341412',
            name: '要素1',
        }, {
            id: '3216346441412',
            name: '要素2',
        }],
    }, {
        id: '2353253',
        name: '类别2',
        children: [{
            id: '321443241241412',
            name: '要素3',
        }, {
            id: '3214e1412',
            name: '要素4',
        }],
    }, {
        id: '523532',
        name: '类别3',
        children: [{
            id: '3214254354361412',
            name: '要素5',
        }, {
            id: '32142131412',
            name: '要素6',
        }],
    }, {
        id: '858665',
        name: '类别4',
        children: [{
            id: '3214121321412',
            name: '要素7',
        }, {
            id: '32143461412',
            name: '要素8',
        }],
    }, {
        id: '31232',
        name: '类别5',
        children: [{
            id: '32141321312412',
            name: '要素9',
        }, {
            id: '32143123121412',
            name: '要素10',
        }],
    }, {
        id: '32432525',
        name: '类别6',
        children: [{
            id: '321432131412',
            name: '要素11',
        }, {
            id: '32143121412',
            name: '要素12',
        }],
    }, {
        id: '45489543',
        name: '类别7',
        children: [{
            id: '32145435341412',
            name: '要素13',
        }, {
            id: '321432311412',
            name: '要素14',
        }],
    }, {
        id: '63243423',
        name: '类别8',
        children: [{
            id: '321321341412',
            name: '要素15',
        }, {
            id: '32132132145431412',
            name: '要素16',
        }],
    }, {
        id: '67326572367',
        name: '类别9',
    }, {
        id: '634672367',
        name: '类别10',
    }, {
        id: '46246126',
        name: '类别11',
    }, {
        id: '4614614',
        name: '类别12',
    }, {
        id: '5763476734',
        name: '类别13',
    }, {
        id: '65632675',
        name: '类别14',
    }, {
        id: '453546165',
        name: '类别15',
        children: [{
            id: '321432131412',
            name: '要素17',
        }, {
            id: '3214232311412',
            name: '要素18',
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
