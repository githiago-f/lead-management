import { Body, Controller, Post, Req, UseGuards } from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';
import { Request } from 'express';
import { User } from '../../domain/entities/user.entity';
import { AuthService } from '../services/auth.service';
import { CreateUserDTO } from '../../domain/services/user/dto/CreateUserDTO';
import { UserService } from '../../domain/services/user/user.service';

@Controller('auth')
export class AuthController {
  constructor(
    private authService: AuthService,
    private userService: UserService
  ){}

  @UseGuards(AuthGuard('local'))
  @Post('login')
  login(@Req() req: Request) {
    return this.authService.login(req.user as User);
  }

  @Post('signup')
  async signup(@Body() user: CreateUserDTO) {
    const logInUser = await this.userService.create(user);
    return this.authService.login(logInUser);
  }
}
