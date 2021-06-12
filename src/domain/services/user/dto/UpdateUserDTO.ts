import { IsNumber, IsNotEmpty, Validate, Length } from 'class-validator';
import { User } from 'src/domain/entities/user.entity';
import { CEPValidator } from '../validators/cep.validator';
import { CPFValidator } from '../validators/cpf.validator';

export class UpdateUserDTO {
  @IsNumber()
  @IsNotEmpty({ message: 'A plan should be selected!' })
  planId: number;

  @IsNotEmpty({ message: 'campo cpf é obrigatório!' })
  @Validate(CPFValidator)
  cpf: string;

  @IsNotEmpty({ message: 'campo name é obrigatório!' })
  name: string;

  @IsNotEmpty({ message: 'campo address é obrigatório!' })
  address: string;

  @Validate(CEPValidator)
  @IsNotEmpty({ message: 'campo cep é obrigatório!' })
  cep: string;

  @IsNotEmpty({ message: 'password é obrigatório!' })
  @Length(6, 80, { message: 'Senha deve ter entre 6 e 20 caracteres' })
  password: string;

  buildEntity() {
    return Object.assign(new User(), this);
  };
}
