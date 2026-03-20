import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Message } from './message.schema';

@Injectable()
export class MessagesService {
  constructor(
    @InjectModel(Message.name) private messageModel: Model<Message>,
  ) {}

  async create(sender: string, message: string): Promise<Message> {
    const newMessage = new this.messageModel({ sender, message });
    return newMessage.save();
  }

  async findAll(): Promise<Message[]> {
    return this.messageModel.find().sort({ createdAt: 1 }).exec();
  }
}