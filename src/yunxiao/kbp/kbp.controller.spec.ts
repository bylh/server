import { Test, TestingModule } from '@nestjs/testing';
import { KbpController } from './kbp.controller';

describe('Kbp Controller', () => {
  let controller: KbpController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [KbpController],
    }).compile();

    controller = module.get<KbpController>(KbpController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
