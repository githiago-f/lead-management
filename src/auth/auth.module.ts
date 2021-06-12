import { Module } from '@nestjs/common';
import { JwtModule } from '@nestjs/jwt';
import { DomainModule } from 'src/domain/domain.module';
import { Constants } from 'src/utils/constants';
import { AuthController } from './constrollers/auth.controller';
import { AuthService } from './services/auth.service';
import { JwtStrategy } from './services/strategies/jwt.strategy';
import { LocalStrategy } from './services/strategies/local.strategy';

@Module({
  imports: [
    DomainModule,
    JwtModule.register({
      secret: Constants.jwtSecret,
      signOptions: { expiresIn: '60s' }
    })
  ],
  controllers: [AuthController],
  exports: [JwtModule],
  providers: [
    AuthService,
    LocalStrategy,
    JwtStrategy
  ],
})
export class AuthModule {}
