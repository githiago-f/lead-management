import { IsArray, IsNotEmpty, IsNumber, IsString } from 'class-validator';
import { Plan } from 'src/domain/entities/plan.entity';

export class CreatePlanDTO {
  @IsNotEmpty({
    message: 'name é obrigatório!'
  })
  @IsString()
  name: string;

  @IsNotEmpty({
    message: 'attributes é obrigatório!'
  })
  @IsArray({
    message: 'attributes deve ser uma lista de atributos do plano'
  })
  attributes: string[];

  @IsNotEmpty()
  @IsNumber()
  price: number;

  toEntity(): Plan { return Object.assign(new Plan(), this); }
}
