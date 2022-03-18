import { Test, TestingModule } from '@nestjs/testing';
import { ApiCacheController } from './api-cache.controller';

describe('ApiCacheController', () => {
  let controller: ApiCacheController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [ApiCacheController],
    }).compile();

    controller = module.get<ApiCacheController>(ApiCacheController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
