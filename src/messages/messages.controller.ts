import { Controller, Get, Post, Body, UseGuards } from '@nestjs/common';
import { MessagesService } from './messages.service';
import { AuthGuard } from '../auth/auth.guard';

@Controller('messages')
export class MessagesController {
  constructor(private readonly messagesService: MessagesService) {}

  @Post()
  @UseGuards(AuthGuard)
  async create(@Body() body: { sender: string; message: string }) {
    return this.messagesService.create(body.sender, body.message);
  }

  @Get()
  @UseGuards(AuthGuard)
  async findAll() {
    return this.messagesService.findAll();
  }
}