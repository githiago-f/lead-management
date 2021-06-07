import { DomainModule } from 'domain/domain.module';
import { DatabaseModule } from 'data/database.module';
import { Module } from '@nestjs/common';

@Module({
  imports: [
    DatabaseModule,
    DomainModule,
  ],
})
export class AppModule { }
