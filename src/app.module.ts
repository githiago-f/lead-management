import { AuthModule } from './auth/auth.module';
import { Module } from '@nestjs/common';
import { DomainModule } from 'src/domain/domain.module';
import { DatabaseModule } from 'src/data/database.module';

@Module({
  imports: [
    AuthModule,
    DatabaseModule,
    DomainModule
  ],
})
export class AppModule { }
