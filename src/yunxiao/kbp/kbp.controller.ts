import { KbpService } from './kbp.service';
import {Controller, Get, Query, Param, Res, Logger} from '@nestjs/common';

@Controller('kbp_api')
export class KbpController {
  private kbpServ: KbpService;
  constructor(kbpServ: KbpService) {
    this.kbpServ = kbpServ;
  }

  @Get()
  async testServ(@Query() query, @Param() params) {
    return {
      code: 0,
      msg: 'ok',
      data: 'kbpService is working'
    }
  }
  @Get('chapters')
  async getChapters(@Query() query, @Param() params, @Res() res) {
    console.log('获取当前学段学科下目录');
    let data =  await this.kbpServ.getChapters();
    res.status(200).json({
      code: 0,
      msg: 'ok',
      data
    })
  }
  @Get('v2/modules')
  async getKnowledgeModules(@Query() query, @Param() params, @Res() res) {
    console.log('获取当前学段学科下知识点模块目录');
    let data =  await this.kbpServ.getKnowledgeModules(query.transform);
    res.status(200).json({
      code: 0,
      msg: 'ok',
      data
    })
  }
  @Get('v2/knowledge_categorys/:id')
  async getKnowledgCategory(@Query() query, @Param() params, @Res() res) {
    console.log('获取当前学段学科下知识点模块目录', query, params);
    let data =  await this.kbpServ.getKnowledgeCategory(Number(params.id));
    res.status(200).json({
      code: 0,
      msg: 'ok',
      data
    })
  }
  @Get('diff')
  async getDiffData(@Query() query, @Param() params, @Res() res) {
    let data =  await this.kbpServ.getDiffData({}, {});
    res.status(200).json({
      code: 0,
      msg: 'ok',
      data
    })
  }
  // 细分关系表
  @Get('v1/know_method_groups/list')
  async getKnowMethodGroupList(@Query() query, @Res() res) {
    Logger.debug('getKnowMethodGroupList(): start');
    const data = await this.kbpServ.getKnowMethodGroupList(query.limit, query.offset);
    res.status(200).json({
      code: 0,
      msg: 'ok',
      data,
    });
    Logger.debug('getKnowMethodGroupList(): end');
  }
  @Get('v1/know_method_groups/:id')
  async getKnowMethodGroupDetail(@Param() params, @Res() res) {
    Logger.debug('getKnowMethodGroupList(): start');
    const data = await this.kbpServ.getKnowMethodGroupDetail(params.id);
    res.status(200).json({
      code: 0,
      msg: 'ok',
      data,
    });
    Logger.debug('getKnowMethodGroupList(): end');
  }
  @Get('v1/know_method_groups/:id/can_edit')
  async getKnowMethodGroupStatus(@Param() params, @Res() res) {
    Logger.debug('getKnowMethodGroupList(): start');
    const data = await this.kbpServ.getKnowMethodGroupStatus(params.id);
    res.status(200).json({
      code: 0,
      msg: 'ok',
      data,
    });
    Logger.debug('getKnowMethodGroupList(): end');
  }
}
