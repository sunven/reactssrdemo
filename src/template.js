function template(initialState = {}, content = "") {
  let scripts = `<script>
                     window.__STATE__ = ${JSON.stringify(initialState)}
                  </script>
                  <script src="clientbuild/index.js"></script>`
  let page = `<!DOCTYPE html>
                <html lang="en">
                <head>
                  <meta charset="utf-8">
                  <title>服务端渲染</title>
                </head>
                <body>
                  <h1>服务端渲染</h1>
                  <div id="app">
                    ${content}
                  </div>
                  ${scripts}
                </body>
                </html>`;
  return page;
}
module.exports = template