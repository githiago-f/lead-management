import { Provider } from '@nestjs/common';
import { Constants } from 'src/utils/constants';
import { Connection, Repository } from 'typeorm';
import { User } from '../entities/user.entity';

export const usersRepository: Provider<Repository<User>>[] = [
  {
    provide: Constants.providers.usersRepository,
    useFactory: (connection: Connection) => connection.getRepository(User),
    inject: [Constants.providers.db]
  }
];
