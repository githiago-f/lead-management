import { createConnection } from 'typeorm';
import { Constants } from 'src/utils/constants';
import { Provider } from '@nestjs/common';

type Env = 'production' | 'test' | 'development';

const entities = [
];

const databaseProviderMap = (env: Env) => {
  if(env === 'production') {
    return {
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
    };
  }
  return {
    provide: Constants.providers.db,
    useFactory: async () => createConnection({
      type: 'sqlite',
      database: ':memory:',
      entities
    })
  };
};

export const databaseProviders: Provider[] = [databaseProviderMap(process.env.NODE_ENV as Env)];
