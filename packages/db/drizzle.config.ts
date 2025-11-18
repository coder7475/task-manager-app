import * as dotenv from 'dotenv';

import type { Config } from 'drizzle-kit';

dotenv.config({
  path: '.env',
});

console.log('DATABASE_URL from env:', process.env.DATABASE_URL);


export default {
  schema: './src/schema',
  out: './src/migrations',
  dialect: 'postgresql',
  dbCredentials: {
    url: process.env.DATABASE_URL!,
  },
  verbose: true,
  strict: true,
} satisfies Config;
