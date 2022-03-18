import { ConfigService } from '@nestjs/config';
import { Injectable } from '@nestjs/common';
import { InjectQueue } from '@nestjs/bull';
import { Queue } from 'bull';

@Injectable()
export class ApiCacheService {
  constructor(
    @InjectQueue('api') private readonly queue: Queue,
    private readonly configService: ConfigService,
  ) {}

  async addToCache(key: string, value: any[]) {
    try {
      await this.queue.add('api-job', {
        data: value,
      });
    } catch (error) {
      console.error(error);
    }
  }

  async getFromCache(key: string) {
    try {
      // const value = await this.cacheManager.get(key);
      return key;
    } catch (error) {
      console.error(error);
    }
  }

  getEnvValues() {
    const configCache = {
      ttl: this.configService.get<string>('TTL'),
      limit: this.configService.get<string>('LIMIT'),
    };
    return configCache;
  }
}
