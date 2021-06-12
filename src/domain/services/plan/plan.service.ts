import { Inject, Injectable } from '@nestjs/common';
import { Plan } from 'src/domain/entities/plan.entity';
import { Constants } from 'src/utils/constants';
import { Repository } from 'typeorm';
import { CreatePlanDTO } from './dto/CreatePlanDTO';

@Injectable()
export class PlanService {
  constructor(
    @Inject(Constants.providers.plansRepository)
    private plansRepository: Repository<Plan>
  ) {}

  findOne(id: number) { return this.plansRepository.findOne(id); }

  findAll() { return this.plansRepository.find(); }

  create(planDto: CreatePlanDTO) {
    const plan = Object.assign(new CreatePlanDTO(), planDto);
    return this.plansRepository.save(plan.toEntity());
  }

  changeState(id: number, doDesable?: true) {
    return this.plansRepository.update(id, {
      active: doDesable||false
    });
  }
}
