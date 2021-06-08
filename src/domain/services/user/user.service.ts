import { Inject, Injectable } from '@nestjs/common';
import { User } from 'src/domain/entities/user.entity';
import { Repository } from 'typeorm';

@Injectable()
export class UserService {

  constructor(
    @Inject('USERS_REPOSITORY')
    private usersRepository: Repository<User>
  ) {}

  public async findOne(username: string): Promise<User|undefined> {
    return this.usersRepository.findOne({
      where: {
        CPF: username
      }
    });
  }

  public async create() {
    // todo
  }
}
