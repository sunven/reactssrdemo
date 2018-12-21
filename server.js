const express = require('express'),
    app = express(),
    template = require('./views/template'),
    fs = require('fs'),
    path = require('path');


app.use('/dist', express.static(path.resolve(__dirname, 'dist')));

let initialState = {
    comments: [-1]
}

const ssr = require('./views/ssr');
app.get('*', (req, res) => {
    const {
        preloadedState,
        content
    } = ssr(initialState,req,{})
    const response = template(preloadedState, content)
    res.send(response);
});

app.listen(3000, () => {
    console.log('服务端渲染 端口号为：3000');
});

// client server
const clientApp = express()
clientApp.use('/dist',express.static(path.resolve(__dirname, 'dist')));
clientApp.get('/', (req, res) => {
    let html = fs.readFileSync(path.resolve(__dirname, 'index.html'), 'utf-8');
    res.end(html);
});

clientApp.listen(3001, () => {
    console.log('客户端渲染 端口号为：3001');
});