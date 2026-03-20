import { Module } from '@nestjs/common';
import { CronService } from './cron.service';
import { LoggerService } from '../logger/logger.service';

@Module({
  providers: [CronService, LoggerService],
})
export class CronModule {}