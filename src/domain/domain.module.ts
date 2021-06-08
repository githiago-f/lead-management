import { Module } from '@nestjs/common';
import { MainController } from 'src/domain/controllers/main.controller';
import { usersRepository } from './repositories/users.repository';
import { MainService } from './services/main/main.service';
import { UserService } from './services/user/user.service';

@Module({
  imports: [],
  controllers: [MainController],
  providers: [
    ...usersRepository,
    MainService,
    UserService
  ],
})
export class DomainModule { }
