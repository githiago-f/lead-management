import { Body, Controller, Get, Patch, Redirect, Req, UseGuards } from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';
import { User } from '../entities/user.entity';
import { UserService } from '../services/user/user.service';
import { Request } from 'express';
import { UserAlterPlan } from './dtos/UserAlterPlan';

@Controller('profile')
export class ProfileController {
  constructor(private userService: UserService) {}

  @UseGuards(AuthGuard('jwt'))
  @Get()
  public view(@Req() req: Request) {
    const user = this.userService.findOne((req.user as User)?.cpf);
    return user;
  }

  @UseGuards(AuthGuard('jwt'))
  @Patch('change-plan')
  @Redirect('/profile')
  public async changePlan(@Req() {user}: Request, @Body() plan: UserAlterPlan) {
    await this.userService.changePlan((user as User)?.id, plan.planId);
  }
}
