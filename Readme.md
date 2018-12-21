# reactssrdemo

A React SSR Demo

webpack打包后，`__filename`错乱问题，配置文件增加：

```json
node: {
    __filename: true,
    __dirname: true
}
```

`store`加载异步数据

applyMiddleware,redux-thunk

[return promise from store after redux thunk dispatch](https://stackoverflow.com/questions/35069212/return-promise-from-store-after-redux-thunk-dispatch)

参考：[node.__filename](https://webpack.js.org/configuration/node/#node-__filename)

## reference

[Server-side rendering your React app in three simple steps](https://medium.freecodecamp.org/server-side-rendering-your-react-app-in-three-simple-steps-7a82b95db82e)

[React 中同构（SSR）原理脉络梳理](http://www.cnblogs.com/asd667/p/9811981.html)

[从零开始React服务器渲染](http://www.alloyteam.com/2017/01/react-from-scratch-server-render/)