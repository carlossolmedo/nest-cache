import { ConfigService } from '@nestjs/config';
import { Injectable } from '@nestjs/common';
import { InjectQueue } from '@nestjs/bull';
import { Queue } from 'bull';
import { ApiProcessor } from './api-cache.processor';

@Injectable()
export class ApiCacheService {
  constructor(
    @InjectQueue('api') private readonly queue: Queue,
    private readonly configService: ConfigService,
    private readonly apiProcessor: ApiProcessor,
  ) {}

  async addToCache(key: string, value: any[]) {
    try {
      const resp = await this.queue.add('api-job', {
        data: value,
      });
      if (resp) return resp;
    } catch (error) {
      console.error(error);
    }
  }

  async getFromCache(key: string) {
    try {
      // const value = await this.apiProcessor.readApiJob('api-job')
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
