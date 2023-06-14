import { insertUserSchema, users } from "../db/schema/user";
import { Context, TypedResponse } from "hono";
import { Env } from "../types/type";
import { eq } from "drizzle-orm";


export const getUsers = async (c:Context<Env>): Promise<TypedResponse> => {
  const db = c.get('db')
  const result = await db.select().from(users).all()

  return c.jsonT(result, 200)
}

export const getUser = async (c:Context<Env>): Promise<Response | TypedResponse> => {
  const db = c.get('db')
  const id = parseInt(c.req.param('id'), 10)
  if (Number.isNaN(id)) return c.text('Invalid ID', 500)
  const result = await db.select().from(users).where(eq(users.id, id)).all()

  return c.jsonT(result, 200)
}

export const postUser = async (c:Context<Env>): Promise<Response> => {
  const db = c.get('db')
  const newUser = insertUserSchema.safeParse(await c.req.json())
  if (!newUser.success) return  c.text(newUser.error.message, 500)
  await db.insert(users).values(newUser.data).run()

  return c.text(`Created User: ${newUser.data.name}.`, 200)

}