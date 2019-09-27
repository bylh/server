import { Test, TestingModule } from '@nestjs/testing';
import { KbpService } from './kbp.service';

describe('KbpService', () => {
  let service: KbpService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [KbpService],
    }).compile();

    service = module.get<KbpService>(KbpService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
