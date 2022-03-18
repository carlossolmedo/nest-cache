import { CACHE_MANAGER, Inject, Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { Cache } from 'cache-manager';

@Injectable()
export class ApiCacheService {
  constructor(
    @Inject(CACHE_MANAGER) private cacheManager: Cache,
    private readonly configService: ConfigService,
  ) {}

  async addToCache(key: string, value: any[]) {
    try {
      await this.cacheManager.set(key, value); // override { ttl: 10000 }
    } catch (error) {
      console.error(error);
    }
  }

  async getFromCache(key: string) {
    try {
      const value = await this.cacheManager.get(key);
      return value;
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
