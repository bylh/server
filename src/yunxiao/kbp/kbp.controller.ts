import { KbpService } from './kbp.service';
import { Controller, Get, Query, Param, Res } from '@nestjs/common';
import { ok } from 'assert';

@Controller('kbp')
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
      msg: ok,
      data
    })
  }
  @Get('v2/modules')
  async getKnowledgeModules(@Query() query, @Param() params, @Res() res) {
    console.log('获取当前学段学科下知识点模块目录');
    let data =  await this.kbpServ.getKnowledgeModules();
    res.status(200).json({
      code: 0,
      msg: ok,
      data
    })
  }
  @Get('v2/knowledge_categorys/:id')
  async getKnowledgCategory(@Query() query, @Param() params, @Res() res) {
    console.log('获取当前学段学科下知识点模块目录', query, params);
    let data =  await this.kbpServ.getKnowledgeCategory(Number(params.id));
    res.status(200).json({
      code: 0,
      msg: ok,
      data
    })
  }
}
