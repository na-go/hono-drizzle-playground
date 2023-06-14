import { Hono } from "hono";
import { cors } from "hono/cors";
import { Env } from "../type";
import { getUser, getUsers, postUser } from "./modules/users";
import { drizzle } from "drizzle-orm/d1";

const app = new Hono<Env>();

app.use('/api/*', cors())

app.use('/api/*',async (c, next) => {
  c.set('db', drizzle(c.env.DB))
  await next()
})

app.get("/api/users", getUsers)

app.get("/api/user/:id", getUser)

app.post("/api/user", postUser)

export default app;