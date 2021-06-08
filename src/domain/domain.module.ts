import { Module } from '@nestjs/common';
import { MainController } from 'src/domain/controllers/main.controller';
import { MainService } from './services/main.service';

@Module({
  imports: [],
  controllers: [MainController],
  providers: [
    MainService
  ],
})
export class DomainModule { }
