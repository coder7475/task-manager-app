import { pgTable, uuid, varchar, integer} from "drizzle-orm/pg-core";
import { teamsTable } from "./teams";

// Members Table
export const membersTable = pgTable('members', {
  memberId: uuid('member_id').primaryKey().defaultRandom(),
  teamId: uuid('team_id')
    .notNull()
    .references(() => teamsTable.teamId, { onDelete: 'cascade' }),
  memberName: varchar('member_name', { length: 255 }).notNull(),
  role: varchar('role', { length: 100 }),
  capacity: integer('capacity').notNull().default(3), // 0-5 tasks
});

