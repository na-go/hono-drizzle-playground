import { Hono } from "hono";
import { cors } from "hono/cors";
import { Env } from "../type";
import { drizzle } from "drizzle-orm/d1"
import { insertUserSchema, users } from "./db/schema/user";

const app = new Hono<Env>();
app.use('/api/*', cors())

app.get("/api/users", async (c): Promise<Response> => {
  const db = drizzle(c.env.DB)
  const result = await db.select().from(users).all()

  return new Response(JSON.stringify(result), { status: 200, headers: { 'Content-Type': 'application/json' } });
})

app.post("/api/users", async (c): Promise<Response> => {
  const newUser = insertUserSchema.safeParse(await c.req.json())
  if (!newUser.success) return new Response('error', { status: 500 })
  const db = drizzle(c.env.DB)
  console.log(newUser.data)
  await db.insert(users).values(newUser.data).run()

  return new Response(null, {status: 204, headers: { 'Content-Type': 'application/json' } });
})

export default app;