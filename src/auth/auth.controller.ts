import { Controller, Get, UseGuards, Request } from '@nestjs/common';
import { AuthGuard } from './auth.guard';

@Controller('auth')
export class AuthController {
  @Get('profile')
  @UseGuards(AuthGuard)
  getProfile(@Request() req) {
    return { user: req.user };
  }
}