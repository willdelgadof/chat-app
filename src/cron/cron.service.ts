import { Injectable, OnModuleInit } from '@nestjs/common';
import * as cron from 'node-cron';
import { LoggerService } from '../logger/logger.service';

@Injectable()
export class CronService implements OnModuleInit {
  constructor(private readonly logger: LoggerService) {}

  onModuleInit() {
    cron.schedule('* * * * *', () => {
      this.logger.log('Cron job running — system check OK');
    });
  }
}