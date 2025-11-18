import { pgTable, uuid, text, timestamp } from "drizzle-orm/pg-core";
import { tasksTable } from "./tasks";
import { membersTable } from "./members";

export const activityLogsTable = pgTable('activity_logs', {
  logId: uuid('log_id').primaryKey().defaultRandom(),
  timestamp: timestamp('timestamp').defaultNow().notNull(),
  taskId: uuid('task_id')
    .notNull()
    .references(() => tasksTable.taskId, { onDelete: 'cascade' }),
  fromMemberId: uuid('from_member_id').references(() => membersTable.memberId, { 
    onDelete: 'set null' 
  }), // nullable
  toMemberId: uuid('to_member_id').references(() => membersTable.memberId, { 
    onDelete: 'set null' 
  }), // nullable
  description: text('description').notNull(),
});
