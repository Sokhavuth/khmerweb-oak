// app.js

import { Application, Router } from "https://deno.land/x/oak/mod.ts"
import html from "./views/index.jsx"

const app = new Application({keys: ["secret1"]})
const router = new Router()

router.get('/', async (ctx) => {
  ctx.response.body = html
})
 
app.use(router.routes())
app.use(router.allowedMethods())

app.use(async (context, next) => {
  try {
    await context.send({
      root: `${Deno.cwd()}/static`,
      index: "index.html",
    });
  } catch {
    await next()
  }
})

app.addEventListener(
  "listen",
  (e) => console.log("Listening on http://localhost:8000")
)

await app.listen({ port: 8000})

// denon run --allow-net --allow-read app.js