import { db } from '@/server/db/index';
import { and, eq } from 'drizzle-orm';
import 'server-only';
import { board_table } from './schema';
// Drizzle queries + mutations to singlestore db
export const QUERY = {
  getBoards: (boardId: number, userId: string) => {
    return db
      .select()
      .from(board_table)
      .where(and(eq(board_table.ownerId, userId), eq(board_table.id, boardId)))
      .orderBy(board_table.createdAt);
  },
  getBoardById: async (boardId: number) => {
    const board = await db
      .select()
      .from(board_table)
      .where(eq(board_table.id, boardId));
    return board[0];
  },
};

export const MUTATION = {
  createBoard: async (input: {
    board: {
      name: string;
    };
    userId: string;
  }) => {
    return await db
      .insert(board_table)
      .values({ ...input.board, ownerId: input.userId });
  },
  onBoardUser: async () => {
    return;
  },
};
