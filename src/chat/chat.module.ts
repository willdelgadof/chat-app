import { Module } from '@nestjs/common';
import { ChatGateway } from './chat.gateway';
import { LoggerService } from '../logger/logger.service';

@Module({
  providers: [ChatGateway, LoggerService],
})
export class ChatModule {}