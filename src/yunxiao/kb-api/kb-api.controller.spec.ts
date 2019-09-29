import { Test, TestingModule } from '@nestjs/testing';
import { KbApiController } from './kb-api.controller';

describe('KbApi Controller', () => {
  let controller: KbApiController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [KbApiController],
    }).compile();

    controller = module.get<KbApiController>(KbApiController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
