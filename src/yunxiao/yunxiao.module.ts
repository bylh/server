import { Module } from '@nestjs/common';
import { KbpController } from './kbp/kbp.controller';
import { KbpService } from './kbp/kbp.service';

@Module({
  controllers: [KbpController],
  providers: [KbpService]
})
export class YunxiaoModule {}
