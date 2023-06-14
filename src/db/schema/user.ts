import { sqliteTable, text, integer, uniqueIndex } from 'drizzle-orm/sqlite-core'

import { InferModel } from "drizzle-orm"
import { createInsertSchema } from 'drizzle-zod';

export const users = sqliteTable('users', {
  id: integer('id').primaryKey().notNull(),
  name: text('name').notNull(),
  email: text('email').notNull(),
  password: text('password').notNull(),
}, (users) => ({
  nameIdx: uniqueIndex('nameIdx').on(users.name),
  emailIdx: uniqueIndex('emailIdx').on(users.email),
}))

export const insertUserSchema = createInsertSchema(users, {
  email: (schema) => schema.email.email(),
});

