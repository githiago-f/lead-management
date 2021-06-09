import { Inject, Injectable } from '@nestjs/common';
import { User } from 'src/domain/entities/user.entity';
import { Constants } from 'src/utils/constants';
import { Repository } from 'typeorm';
import { CreateUserDTO } from './dto/CreateUserDTO';

@Injectable()
export class UserService {
  constructor(
    @Inject(Constants.providers.usersRepository)
    private usersRepository: Repository<User>
  ) {}

  public async findOne(cpf: string): Promise<User|undefined> {
    return this.usersRepository.findOne({
      where: {
        cpf: cpf
      }
    });
  }

  public async create(user: CreateUserDTO) {
    user = Object.assign(new CreateUserDTO(), user);
    return this.usersRepository.save(user.buildEntity());
  }
}
