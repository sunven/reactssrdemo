# reactssrdemo

A React SSR Demo

## Run

```bash
yarn
yarn build:client
yarn build:server
yarn start
```

## 入口

`entry-client.js`客户端渲染入口

`entry-server.js`服务端渲染入口

## 服务端

异步获取数据，渲染页面

```js
app.get('*', function (req, res) {
    const store = getServerStore();
    // 找到匹配的路由
    const matchedRoutes = matchRoutes(routes, req.path);
    const promises = [];
    matchedRoutes.forEach(item => {
        if (item.route.component.asyncLoadData) {
            //执行asyncLoadData，异步加载数据
            promises.push(item.route.component.asyncLoadData(store));
        }
    })

    Promise.all(promises).then(() => {
        const content = ssr(store, routes, req, {})
        const html = template(store.getState(), content)
        res.send(html);
    })
});
```

renderToString 渲染

```js
let content = renderToString(
  <Provider store={store} >
    <StaticRouter  location={req.path} context={context}>
      <div>
        <Link to="/Home">Home</Link>,<Link to="/Bar">Bar</Link>,
        <Link to="/Foo">Foo</Link>
        {renderRoutes(routes)}
      </div>
    </StaticRouter>
  </Provider>
);
```

通过 `window.__STATE__` 是客户初始化store

```js
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
```

## 问题

webpack打包后，`__filename`错乱问题，配置文件增加：

```json
node: {
    __filename: true,
    __dirname: true
}
```

参考：[node.__filename](https://webpack.js.org/configuration/node/#node-__filename)

`store`加载异步数据

使用applyMiddleware和redux-thunk

[return promise from store after redux thunk dispatch](https://stackoverflow.com/questions/35069212/return-promise-from-store-after-redux-thunk-dispatch)



## reference

[Server-side rendering your React app in three simple steps](https://medium.freecodecamp.org/server-side-rendering-your-react-app-in-three-simple-steps-7a82b95db82e)

[React 中同构（SSR）原理脉络梳理](http://www.cnblogs.com/asd667/p/9811981.html)

[从零开始React服务器渲染](http://www.alloyteam.com/2017/01/react-from-scratch-server-render/)