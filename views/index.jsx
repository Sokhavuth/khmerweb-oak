// views/index.jsx

/** @jsx h */
//import { h } from "https://deno.land/x/nano_jsx@v0.0.33/mod.ts"
import * as ReactDOMServer from "https://esm.sh/react-dom@/server";
import { createElement as h } from "https://esm.sh/react@17.0.2";

function Index(props){
  return(
    <div>{props.message}</div>
  )
}

const message = 'Web development with Oad framework'
const str = ReactDOMServer.renderToString(<Index message={message} />)
const html = `<!DOCTYPE html>${str}`;

export default html