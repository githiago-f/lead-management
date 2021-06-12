import { Module } from '@nestjs/common';
import { PassportModule } from '@nestjs/passport';
import { DatabaseModule } from 'src/data/database.module';
import { PlanController } from 'src/domain/controllers/plan.controller';
import { ProfileController } from './controllers/profile.controller';
import { UsersController } from './controllers/users.controller';
import { repositoryProviders } from './providers/repository.providers';
import { PlanService } from './services/plan/plan.service';
import { UserService } from './services/user/user.service';

@Module({
  imports: [
    DatabaseModule,
    PassportModule,
  ],
  controllers: [
    PlanController,
    UsersController,
    ProfileController
  ],
  providers: [
    ...repositoryProviders,
    UserService,
    PlanService,
  ],
  exports: [
    UserService
  ]
})
export class DomainModule { }
