import { pgTable, uuid, varchar, timestamp } from 'drizzle-orm/pg-core';

// Users Table
export const usersTable = pgTable('users', {
  id: uuid('id').primaryKey().defaultRandom(),
  userName: varchar('user_name', { length: 255 }).notNull().unique(),
  password: varchar('password', { length: 255 }).notNull(),
  createdAt: timestamp('created_at', { withTimezone: true }).defaultNow().notNull(),
  updatedAt: timestamp('updated_at', { withTimezone: true })
  .notNull()
  .$onUpdate(() => new Date()),
});

