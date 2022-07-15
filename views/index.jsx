// views/index.jsx

/** @jsx h */
import { h, renderSSR } from "https://deno.land/x/nano_jsx@v0.0.33/mod.ts"

function Index(props){
  return(
    <html>
      <head>
        <meta charset="UTF-8"/>
        <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
        <title>Oak Web Framework</title>
      </head>
      <body>
        <h3>{props.message}</h3>
      </body>
    </html>
  )
}

const message = 'Web development with Oak framework'
const str = renderSSR(<Index message={message} />)
const html = `<!DOCTYPE html>${str} `

export default html