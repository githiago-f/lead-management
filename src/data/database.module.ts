import { Module } from '@nestjs/common';
import { databaseProviders } from './database.provider';

@Module({
  exports: [
    ...databaseProviders
  ],
  providers: [
    ...databaseProviders
  ],
})
export class DatabaseModule {}
