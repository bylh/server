import {Controller, Get, Logger, Param, Query, Res} from '@nestjs/common';
import {KbApiService} from './kb-api.service';

@Controller('kb_api')
export class KbApiController {
    private kbApiServ: KbApiService;

    constructor(kbApiServ: KbApiService) {
        this.kbApiServ = kbApiServ;
    }
    @Get()
    async testServ(@Query() query, @Param() params) {
        // 注意：函数参数中引入@Res就不能直接返回了，需要用res返回结果
        return {
            code: 0,
            msg: 'ok',
            data: 'kbApiService is working',
        };
    }
    @Get('v1/element_category')
    async getElementCategory(@Query() query, @Res() res) {
        const data =  await this.kbApiServ.getElementCategory(query.limit, query.offset);
        res.status(200).json({
            code: 0,
            msg: 'ok',
            data,
        });
    }

    @Get('v1/element_category/:id')
    async getElementCategoryDetail(@Param() params, @Res() res) {
        Logger.debug('getElementCategoryDetail: start');
        const data =  await this.kbApiServ.getElementCategoryDetail(params.id);
        res.status(200).json({
            code: 0,
            msg: 'ok',
            data,
        });
        Logger.debug('getElementCategoryDetail: end');
    }

    // 细分关系表
    @Get('v2/know_method_groups/list')
    async getKnowMethodGroupList(@Query() query, @Res() res) {
        Logger.debug('getKnowMethodGroupList(): start');
        const data = await this.kbApiServ.getKnowMethodGroupList(query.limit, query.offset);
        res.status(200).json({
           code: 0,
           msg: 'ok',
           data,
        });
        Logger.debug('getKnowMethodGroupList(): end');
    }
}
