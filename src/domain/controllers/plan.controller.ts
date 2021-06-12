import { Body, Controller, Delete, Get, Param, Patch, Post, UseGuards } from '@nestjs/common';
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

  @UseGuards(AuthGuard('jwt'))
  @Post()
  public createPlan(@Body() planDTO: CreatePlanDTO) {
    return this.planService.create(planDTO);
  }

  @UseGuards(AuthGuard('jwt'))
  @Delete('/disable/:id')
  public deletePlan(@Param('id') id: number) {
    return this.planService.changeState(id);
  }

  @UseGuards(AuthGuard('jwt'))
  @Patch('/enable/:id')
  public enablePlan(@Param('id') id: number) {
    return this.planService.changeState(id, true);
  }


}
