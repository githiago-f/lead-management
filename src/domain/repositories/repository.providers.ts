import { Provider } from '@nestjs/common';
import { Constants } from 'src/utils/constants';
import { Connection } from 'typeorm';
import { Plan } from '../entities/plan.entity';
import { User } from '../entities/user.entity';


export const repositoryProviders: Provider[] = [
  {
    provide: Constants.providers.usersRepository,
    useFactory: async (connection: Connection) => connection.getRepository(User),
    inject: [Constants.providers.db]
  },
  {
    provide: Constants.providers.plansRepository,
    useFactory: async (connection: Connection) => connection.getRepository(Plan),
    inject: [Constants.providers.db]
  }
];
