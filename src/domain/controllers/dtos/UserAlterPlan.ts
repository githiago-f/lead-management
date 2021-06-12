import { IsNotEmpty, IsNumber } from 'class-validator';

export class UserAlterPlan {
  @IsNotEmpty()
  @IsNumber()
  planId: number;
}
