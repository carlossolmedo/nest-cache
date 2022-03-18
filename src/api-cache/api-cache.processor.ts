import { Process, Processor } from '@nestjs/bull';
import { Logger } from '@nestjs/common';
import { Job } from 'bull';

@Processor('api')
export class ApiProcessor {
  private readonly logger = new Logger(ApiProcessor.name);

  @Process('api-job')
  readApiJob(job: Job) {
    this.logger.debug('Start bulling...');
    this.logger.debug(job.data);
    this.logger.debug('Data save completed');
  }
}
