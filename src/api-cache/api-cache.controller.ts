// eslint-disable-next-line prettier/prettier
import { Controller, Body, Res, Get, Post, Param, HttpStatus } from '@nestjs/common';
import { ApiCacheService } from './api-cache.service';
import { IZendesk } from 'src/interfaces/zendesk';

@Controller('cache')
export class ApiCacheController {
  constructor(private readonly apiCacheService: ApiCacheService) {}

  @Post()
  async addToCache(@Body() zendeskData: IZendesk, @Res() response: any) {
    try {
      console.log('POST: ', zendeskData);
      await this.apiCacheService.addToCache(zendeskData.key, zendeskData.value);
      return response
        .status(HttpStatus.CREATED)
        .json({ message: 'Data added successfully' });
    } catch (error) {
      console.error(error);
    }
  }

  @Get('/key/:key')
  async getFromCache(@Res() response: any, @Param('key') key: string) {
    try {
      const value = await this.apiCacheService.getFromCache(key);
      console.log('GET cache data: ', value);
      return response.status(HttpStatus.OK).json(value);
    } catch (error) {
      console.error(error);
    }
  }

  @Get('/env')
  getEnvValues() {
    return this.apiCacheService.getEnvValues();
  }
}
