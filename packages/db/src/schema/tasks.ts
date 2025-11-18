import { pgTable, uuid, varchar, text, timestamp } from "drizzle-orm/pg-core";
import { projectsTable } from "./projects";
import { membersTable } from "./members";
import { priorityEnum, statusEnum } from "./_enums";


// Tasks Table
export const tasksTable = pgTable('tasks', {
  taskId: uuid('task_id').primaryKey().defaultRandom(),
  projectId: uuid('project_id')
    .notNull()
    .references(() => projectsTable.projectId, { onDelete: 'cascade' }),
  title: varchar('title', { length: 255 }).notNull(),
  description: text('description'),
  assignedMemberId: uuid('assigned_member_id').references(() => membersTable.memberId, { 
    onDelete: 'set null' 
  }), // nullable for "Unassigned"
  priority: priorityEnum('priority').notNull().default('Medium'),
  status: statusEnum('status').notNull().default('Pending'),
  createdAt: timestamp('created_at', { withTimezone: true }).defaultNow().notNull(),
  updatedAt: timestamp('updated_at', { withTimezone: true })
  .notNull()
  .$onUpdate(() => new Date()),
});


