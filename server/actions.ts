'use server';

import { and, eq } from 'drizzle-orm';
import { cookies } from 'next/headers';
import { db } from './db';
import { board_table } from './db/schema';

export const deleteBoard = async (boardId: number) => {
  // TODO check if user is signed in else return

  const [file] = await db
    .select()
    .from(board_table)
    .where(eq(board_table.id, boardId));

  if (!file) {
    return { error: 'File not found' };
  }

  await db.delete(board_table).where(eq(board_table.id, boardId));

  // force next.js to revalidate data
  const c = await cookies();
  c.set('force-refresh', JSON.stringify(Math.random()));
  return { success: true };
};
