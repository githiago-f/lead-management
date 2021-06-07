import { Module } from '@nestjs/common';
import { DatabaseModule } from 'data/database.module';
import { MainController } from 'domain/controllers/main.controller';

@Module({
  imports: [DatabaseModule],
  controllers: [MainController],
  providers: [],
})
export class DomainModule { }
