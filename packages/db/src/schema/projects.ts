import { pgTable, uuid, varchar, timestamp } from "drizzle-orm/pg-core";
import { teamsTable } from "./teams";
import { relations } from "drizzle-orm";
import { tasksTable } from "./tasks";

// Projects Table
export const projectsTable = pgTable('projects', {
  projectId: uuid('project_id').primaryKey().defaultRandom(),
  projectName: varchar('project_name', { length: 255 }).notNull(),
  teamId: uuid('team_id')
    .notNull()
    .references(() => teamsTable.teamId, { onDelete: 'cascade' }),
  createdAt: timestamp('created_at', { withTimezone: true }).defaultNow().notNull(),
  updatedAt: timestamp('updated_at', { withTimezone: true })
  .notNull()
  .$onUpdate(() => new Date()),
});
