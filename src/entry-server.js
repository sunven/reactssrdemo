// import React from 'react';
// import {hydrate} from 'react-dom'
// import {Provider} from 'react-redux'
// import configureStore from './redux/configureStore'
// import { BrowserRouter } from "react-router-dom";
// import App from './App';

// const state = window.__STATE__;
// delete window.__STATE__;
// const store = configureStore(state)

// hydrate(<Provider store={store} >
//             <BrowserRouter>
//                 <App />
//             </BrowserRouter>
//          </Provider>, document.getElementById('app'));


import express from 'express';
import { matchRoutes } from 'react-router-config'
import routes from './Route/Routes';
import configureStore from './redux/configureStore'
import ssr from './ssr'
import template from './template'
const fs = require('fs'),
    path = require('path');

const app = express();
app.use('/clientbuild',express.static(path.resolve(__dirname, '../clientbuild/')));

app.get('*', function (req, res) {
	const store = configureStore();
	// 找到匹配的路由
	const matchedRoutes = matchRoutes(routes, req.path);
	const promises = [];

	matchedRoutes.forEach(item => {
		if (item.route.component.asyncLoadData) {
            //执行loadData，异步加载数据
			const promise = new Promise((resolve, reject) => {
				item.route.component.asyncLoadData(store).then(resolve).catch(reject);
			})
			promises.push(promise);
		}
	})
	Promise.all(promises).then(() => {
        const context = {css: []};
        const {
            preloadedState,
            content
        } = ssr(store,routes,req,context)
        const html = template(preloadedState, content)
		if (context.action === 'REPLACE') {
			res.redirect(301, context.url)
		}else if (context.NOT_FOUND) {
			res.status(404);
			res.send(html);
		}else {
			res.send(html);
		}
	})
});

app.listen(3000, () => {
    console.log('服务端渲染 端口号为：3000');
});

// client server
const clientApp = express()
clientApp.use('/clientbuild',express.static(path.resolve(__dirname, '../clientbuild/')));
clientApp.get('/', (req, res) => {
    let html = fs.readFileSync(path.resolve(__dirname, '../index.html'), 'utf-8');
    res.end(html);
});

clientApp.listen(3001, () => {
    console.log('客户端渲染 端口号为：3001');
});