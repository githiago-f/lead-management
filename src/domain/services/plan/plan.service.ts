import { Inject, Injectable } from '@nestjs/common';
import { Plan } from 'src/domain/entities/plan.entity';
import { Constants } from 'src/utils/constants';
import { Repository } from 'typeorm';
import { CreatePlanDTO } from './dto/CreatePlanDTO';

@Injectable()
export class PlanService {
  constructor(
    @Inject(Constants.providers.usersRepository)
    private plansRepository: Repository<Plan>
  ) {}

  findOne(id: number) { return this.plansRepository.findOne(id); }

  findAll() { return this.plansRepository.find(); }

  create(planDto: CreatePlanDTO) {
    const plan = Object.assign(new CreatePlanDTO(), planDto);
    return this.plansRepository.save(plan.toEntity());
  }
}
