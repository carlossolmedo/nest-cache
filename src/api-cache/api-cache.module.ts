import { Module } from '@nestjs/common';
import { BullModule } from '@nestjs/bull';
import { ApiCacheController } from './api-cache.controller';
import { ApiCacheService } from './api-cache.service';
import { ApiProcessor } from './api-cache.processor';

@Module({
  imports: [
    BullModule.registerQueue({
      name: 'api',
    }),
  ],
  controllers: [ApiCacheController],
  providers: [ApiCacheService, ApiProcessor],
})
export class ApiCacheModule {}
