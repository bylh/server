import { Injectable } from '@nestjs/common';

@Injectable()
export class KbApiService {
    async getElementCategory() {

        return categoryData;
    }
    async getElementCategoryDetail(id: number | string) {
        return (categoryData.list as any).find(item => item.id === id);
    }
}

const categoryData = {
    total_num: 15,
    list: [{
        id: '21412412',
        name: '类别1',
        children: [{
           id: '32141412',
            name: '要素1',
        }, {
            id: '32141412',
            name: '要素2',
        }],
    }, {
        id: '2353253',
        name: '类别2',
        children: [{
            id: '32141412',
            name: '要素3',
        }, {
            id: '32141412',
            name: '要素4',
        }],
    }, {
        id: '523532',
        name: '类别3',
        children: [{
            id: '32141412',
            name: '要素5',
        }, {
            id: '32141412',
            name: '要素6',
        }],
    }, {
        id: '858665',
        name: '类别4',
        children: [{
            id: '32141412',
            name: '要素7',
        }, {
            id: '32141412',
            name: '要素8',
        }],
    }, {
        id: '31232',
        name: '类别5',
        children: [{
            id: '32141412',
            name: '要素9',
        }, {
            id: '32141412',
            name: '要素10',
        }],
    }, {
        id: '32432525',
        name: '类别6',
        children: [{
            id: '32141412',
            name: '要素11',
        }, {
            id: '32141412',
            name: '要素12',
        }],
    }, {
        id: '45489543',
        name: '类别7',
        children: [{
            id: '32141412',
            name: '要素13',
        }, {
            id: '32141412',
            name: '要素14',
        }],
    }, {
        id: '63243423',
        name: '类别8',
        children: [{
            id: '32141412',
            name: '要素15',
        }, {
            id: '32141412',
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
            id: '32141412',
            name: '要素17',
        }, {
            id: '32141412',
            name: '要素18',
        }],
    }],
};
