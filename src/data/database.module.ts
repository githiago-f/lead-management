import { Module } from '@nestjs/common';
import { databaseProviders } from './database.provider';

@Module({
  imports: [],
  controllers: [],
  providers: [
    databaseProviders[process.env.NODE_ENV]
  ],
})
export class DatabaseModule {}
