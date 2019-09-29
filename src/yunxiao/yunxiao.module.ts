import { Module } from '@nestjs/common';
import { KbpController } from './kbp/kbp.controller';
import { KbpService } from './kbp/kbp.service';
import { KbApiController } from './kb-api/kb-api.controller';
import { KbApiService } from './kb-api/kb-api.service';

@Module({
  controllers: [KbpController, KbApiController],
  providers: [KbpService, KbApiService]
})
export class YunxiaoModule {}
