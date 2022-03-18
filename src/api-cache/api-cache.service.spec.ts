import { Test, TestingModule } from '@nestjs/testing';
import { ApiCacheService } from './api-cache.service';

describe('ApiCacheService', () => {
  let service: ApiCacheService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [ApiCacheService],
    }).compile();

    service = module.get<ApiCacheService>(ApiCacheService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
