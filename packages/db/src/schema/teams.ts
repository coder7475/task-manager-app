import { pgTable, uuid, varchar, timestamp} from "drizzle-orm/pg-core";
import { usersTable } from "./users";
import { relations } from "drizzle-orm";

// Teams Table
export const teamsTable = pgTable('teams', {
  teamId: uuid('team_id').primaryKey().defaultRandom(),
  teamName: varchar('team_name', { length: 255 }).notNull(),
  createdByUserId: uuid('created_by_user_id')
    .notNull()
    .references(() => usersTable.id, { onDelete: 'cascade' }),
  createdAt: timestamp('created_at', { withTimezone: true }).defaultNow().notNull(),
  updatedAt: timestamp('updated_at', { withTimezone: true })
  .notNull()
  .$onUpdate(() => new Date()),
});

