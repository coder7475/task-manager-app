import { relations } from 'drizzle-orm';

import { usersTable } from './users';
import { profilesTable } from './profiles';
import { passportTable } from './passport';
import { teamsTable } from './teams';
import { tasksTable } from "./tasks";
import { activityLogsTable } from "./activityLogs";
import { membersTable } from './members';
import { projectsTable } from './projects';

// Relations
export const usersRelations = relations(usersTable, ({ one, many }) => ({
  profile: one(profilesTable, {
    fields: [usersTable.id],
    references: [profilesTable.userId],
  }),
  teamsCreated: many(teamsTable, {
    relationName: "teamsCreatedByUser"
  }),
  passports: many(passportTable)
}));

// Profiles relations
export const profilesRelations = relations(profilesTable, ({ one }) => ({
  user: one(usersTable, {
    fields: [profilesTable.userId],
    references: [usersTable.id],
  }),
}));

// Passports relations
export const passportRelations = relations(passportTable, ({ one }) => ({
  user: one(usersTable, {
    fields: [passportTable.userId],
    references: [usersTable.id],
  }),
}));

// Teams relations
export const teamsRelations = relations(teamsTable, ({ one, many }) => ({
  createdBy: one(usersTable, {
    fields: [teamsTable.createdByUserId],
    references: [usersTable.id],
    relationName: "teamsCreatedByUser",
  }),
  members: many(membersTable),
  projects: many(projectsTable)
}));


// projects relationships
export const projectsRelations = relations(projectsTable, ({ one, many }) => ({
  team: one(teamsTable, {
    fields: [projectsTable.teamId],
    references: [teamsTable.teamId],
  }),
  tasks: many(tasksTable),
}));


// members relations
export const membersRelations = relations(membersTable, ({ one, many }) => ({
  team: one(teamsTable, {
    fields: [membersTable.teamId],
    references: [teamsTable.teamId],
  }),
  tasks: many(tasksTable),
  fromLogs: many(activityLogsTable, { relationName: 'fromMember' }),
  toLogs: many(activityLogsTable, { relationName: 'toMember' }),
}));



// tasks relationships
export const tasksRelations = relations(tasksTable, ({ one, many }) => ({
  project: one(projectsTable, {
    fields: [tasksTable.projectId],
    references: [projectsTable.projectId],
  }),
  assignedMember: one(membersTable, {
    fields: [tasksTable.assignedMemberId],
    references: [membersTable.memberId],
  }),
  activityLogs: many(activityLogsTable),
}));


// activity logs relationships
export const activityLogsRelations = relations(activityLogsTable, ({ one }) => ({
  task: one(tasksTable, {
    fields: [activityLogsTable.taskId],
    references: [tasksTable.taskId],
  }),
  fromMember: one(membersTable, {
    fields: [activityLogsTable.fromMemberId],
    references: [membersTable.memberId],
    relationName: 'fromMember',
  }),
  toMember: one(membersTable, {
    fields: [activityLogsTable.toMemberId],
    references: [membersTable.memberId],
    relationName: 'toMember',
  }),
}));
