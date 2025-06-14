import { defineConfig } from 'drizzle-kit';
import './envConfig.ts';

export default defineConfig({
  dialect: 'singlestore',
  out: './drizzle',
  schema: './server/db/schema.ts',
  tablesFilter: ['trello-clone_*'],
  dbCredentials: {
    host: process.env.SINGLESTORE_HOST || '',
    port: parseInt(process.env.SINGLESTORE_PORT || '0000'),
    user: process.env.SINGLESTORE_USER || '',
    password: process.env.SINGLESTORE_PASS || '',
    database: process.env.SINGLESTORE_DB_NAME || '',
    ssl: {},
  },
});
