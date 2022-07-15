// app.js

import { Application, Router } from "https://deno.land/x/oak/mod.ts"

import { 
  viewEngine, 
  ejsEngine, 
  oakAdapter
} from "https://deno.land/x/view_engine@v10.5.1/mod.ts"


const app = new Application();

app.use(
  viewEngine(oakAdapter, ejsEngine, {
    viewRoot: "./views",
  })
);

app.use(async (ctx, next) => {
  ctx.render("index.ejs", {data: { name: "Sokhavuth" }} );
});

app.addEventListener(
  "listen",
  (e) => console.log("Listening on http://localhost:8000")
)

await app.listen({ port: 8000})

// denon run --allow-net --allow-read app.js