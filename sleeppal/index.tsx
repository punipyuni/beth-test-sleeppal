import { Elysia } from "elysia";
import { html } from "@elysiajs/html";
import * as elements from "typed-html";

const app = new Elysia()
.use(html())
.get("/", ({ html }) => 
  html(
  <BaseHtml> 
    <body>
      <h1>Testing BETH Stack</h1>
      <h2>TODO: trying later after done with original project.</h2>
    </body>
  </BaseHtml>
  )
)
.listen(3000);

console.log(
  `Elysia is running at http://${app.server?.hostname}:${app.server?.port}`
);

const BaseHtml = ({ children } : elements.Children) => `
<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>BETH Stack</title>
</head>

${children}
`;

