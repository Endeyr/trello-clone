if (process.env.NEXT_RUNTIME) {
  require('server-only');
}

import {
  bigint,
  boolean,
  index,
  int,
  singlestoreTableCreator,
  text,
  timestamp,
} from 'drizzle-orm/singlestore-core';

export const createTable = singlestoreTableCreator(
  (name) => `trello-clone_${name}`
);

export const board_table = createTable(
  'board-table',
  {
    id: bigint('id', { mode: 'number', unsigned: true })
      .primaryKey()
      .autoincrement(),
    ownerId: text('owner_id').notNull(), // User Id
    name: text('name').notNull(),
    createdAt: timestamp('created_at').notNull().defaultNow(),
  },
  (t) => {
    return [index('owner_id_index').on(t.ownerId)];
  }
);

export type DB_BoardTableType = typeof board_table.$inferSelect;
