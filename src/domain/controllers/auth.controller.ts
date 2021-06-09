import { Body, Controller, Get, Post, Redirect, Req, UseGuards } from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';
import { Request } from 'express';
import { User } from '../entities/user.entity';
import { AuthService } from '../services/auth/auth.service';
import { CreateUserDTO } from '../services/user/dto/CreateUserDTO';
import { UserService } from '../services/user/user.service';

@Controller()
export class AuthController {
  constructor(
    private authService: AuthService,
    private userService: UserService
  ){}

  @UseGuards(AuthGuard('jwt'))
  @Get('/profile')
  profile(@Req() req: Request) {
    const user = this.userService.findOne((req.user as User)?.cpf);
    return user;
  }

  @UseGuards(AuthGuard('local'))
  @Post('auth/login')
  login(@Req() req: Request) {
    return this.authService.login(req.user as User);
  }

  @Post('auth/signup')
  async signup(@Body() user: CreateUserDTO) {
    const logInUser = await this.userService.create(user);
    await this.authService.login(logInUser);
    return;
  }
}
