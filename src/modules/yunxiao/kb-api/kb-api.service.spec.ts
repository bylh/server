import { Test, TestingModule } from '@nestjs/testing';
import { KbApiService } from './kb-api.service';

describe('KbApiService', () => {
  let service: KbApiService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [KbApiService],
    }).compile();

    service = module.get<KbApiService>(KbApiService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
