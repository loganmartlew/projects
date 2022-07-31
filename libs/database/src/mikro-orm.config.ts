import 'dotenv/config';
import { Options } from '@mikro-orm/core';

import { allEntities } from './lib/entities';

export default {
  type: 'postgresql' as const,
  host: process.env.DATABASE_HOST,
  port: Number.parseInt(process.env.DATABASE_PORT as string, 10),
  dbName: process.env.DATABASE_NAME,
  user: process.env.DATABASE_USER,
  password: process.env.DATABASE_PASS,
  entities: allEntities,
} as Options;
