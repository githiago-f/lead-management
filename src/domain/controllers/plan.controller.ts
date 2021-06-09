import { Body, Controller, Get, Param, Post, UseGuards } from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';
import { CreatePlanDTO } from '../services/plan/dto/CreatePlanDTO';
import { PlanService } from '../services/plan/plan.service';

@Controller('plans')
export class PlanController {
  constructor(private planService: PlanService) {}

  @Get()
  public rootReturn() {
    return this.planService.findAll();
  }

  @Get('/:id')
  public findPlan(@Param('id') id: number) {
    return this.planService.findOne(id);
  }

  // todo implement role sistem to prevent any user to create new plans
  @UseGuards(AuthGuard('jwt'))
  @Post()
  public createPlan(@Body() planDTO: CreatePlanDTO) {
    return this.planService.create(planDTO);
  }
}
