import { AsyncLocalStorage } from 'async_hooks';

import { Options } from '@mikro-orm/core';
import { TsMorphMetadataProvider } from '@mikro-orm/reflection';
import { SqlHighlighter } from '@mikro-orm/sql-highlighter';

import { User, Customer } from './customer/customer.entity';

const storage = new AsyncLocalStorage<any>();
const config = {
  type: 'postgresql',
  host: 'localhost',
  dbName: '',
  user: 'postgres',
  password: '',
  entities: [User, Customer],
  debug: true,
  highlighter: new SqlHighlighter(),
  metadataProvider: TsMorphMetadataProvider,
  migrations: {
    disableForeignKeys: false,
    tableName: 'migrations',
    path: 'src/database/migrations',
    emit: 'ts',
  },
  registerRequestContext: false,
  context: () => storage.getStore(),
} as Options;

export default config;
