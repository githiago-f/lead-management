import { Module } from '@nestjs/common';
import { PassportModule } from '@nestjs/passport';
import { DatabaseModule } from 'src/data/database.module';
import { PlanController } from 'src/domain/controllers/plan.controller';
import { AuthController } from './controllers/auth.controller';
import { repositoryProviders } from './repositories/repository.providers';
import { AuthService } from './services/auth/auth.service';
import { LocalStrategy } from './services/auth/strategies/local.strategy';
import { PlanService } from './services/plan/plan.service';
import { UserService } from './services/user/user.service';
import { JwtModule } from '@nestjs/jwt';
import { Constants } from 'src/utils/constants';
import { JwtStrategy } from './services/auth/strategies/jwt.strategy';

@Module({
  imports: [
    DatabaseModule,
    PassportModule,
    JwtModule.register({
      secret: Constants.jwtSecret,
      signOptions: { expiresIn: '60s' }
    })
  ],
  controllers: [
    AuthController,
    PlanController,
  ],
  exports: [JwtModule],
  providers: [
    ...repositoryProviders,
    UserService,
    PlanService,
    AuthService,
    LocalStrategy,
    JwtStrategy
  ],
})
export class DomainModule { }
