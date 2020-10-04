import { Module } from '@nestjs/common';
import { ToolsController } from './tools.controller';
import { ToolsService } from './tools.service';
import { MulterModule } from '@nestjs/platform-express';

@Module({
  imports:[MulterModule.register({
    dest: '/public',
  })],
  controllers: [ToolsController],
  providers: [ToolsService]
})
export class ToolsModule {}
