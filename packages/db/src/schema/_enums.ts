import { pgEnum } from 'drizzle-orm/pg-core';

export const genderEnum = pgEnum('gender', ['MALE', 'FEMALE', 'OTHER', 'UNKNOWN']);

export type Gender = (typeof genderEnum.enumValues)[number];

// Enums
export const priorityEnum = pgEnum('priority', ['Low', 'Medium', 'High']);
export const statusEnum = pgEnum('status', ['Pending', 'In Progress', 'Done']);

export type Priority = (typeof priorityEnum.enumValues)[number];
export type Status = (typeof statusEnum.enumValues)[number];