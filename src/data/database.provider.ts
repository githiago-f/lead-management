import { Provider } from '@nestjs/common';
import { createConnection } from 'typeorm';
import { Constants } from 'utils/constants';

const entities = [
];

export const databaseProviders: Record<string, Provider> = {
  'development': {
    provide: Constants.providers.db,
    useFactory: async () => createConnection({
      type: 'sqlite',
      database: ':memory:',
      entities
    })
  },
  'production': {
    provide: Constants.providers.db,
    useFactory: async () => createConnection({
      type: 'postgres',
      database: '',
      host: '',
      password: '',
      port: 5432,
      username: '',
      entities
    })
  }
};
