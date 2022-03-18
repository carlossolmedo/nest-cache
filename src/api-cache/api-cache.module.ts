import { CacheModule, Module } from '@nestjs/common';
import { ApiCacheController } from './api-cache.controller';
import { ApiCacheService } from './api-cache.service';

@Module({
  imports: [CacheModule.register({ ttl: 10, max: 10 })],
  controllers: [ApiCacheController],
  providers: [ApiCacheService],
})
export class ApiCacheModule {}
