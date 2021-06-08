import { createConnection } from 'typeorm';
import { Constants } from 'src/utils/constants';
import { Provider } from '@nestjs/common';
import { User } from 'src/domain/entities/user.entity';
import { Plan } from 'src/domain/entities/plan.entity';

type Env = 'production' | 'test' | 'development';

const entities = [
  User,
  Plan
];

const databaseProviderMap = (env: Env) => {
  switch(env) {
  case 'production':
    return {
      provide: Constants.providers.db,
      useFactory: async () => createConnection({
        type: 'postgres',
        database: process.env.DB_NAME || 'application',
        host: process.env.DB_HOST || 'localhost',
        password: process.env.DB_PASSWORD || 'pass123',
        port: parseInt(process.env.DB_PORT) || 5432,
        username: process.env.DB_USERNAME||'guest',
        synchronize: true,
        entities
      })
    };
  default:
    return {
      provide: Constants.providers.db,
      useFactory: async () => createConnection({
        type: 'sqlite',
        database: ':memory:',
        entities
      })
    };
  }
};

export const databaseProviders: Provider[] = [databaseProviderMap(process.env.NODE_ENV as Env)];
