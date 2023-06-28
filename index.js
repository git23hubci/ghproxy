// const express = require('express');
// const { createProxyMiddleware } = require('http-proxy-middleware');
// const app = express();
// app.use('/', createProxyMiddleware({ target: 'https://github.com/', changeOrigin: true }));
// app.listen(3000);
const express = require('express');
const { createProxyMiddleware } = require('http-proxy-middleware');
const app = express();

app.use('/', (req, res, next) => {
  const { url } = req.query;
  if (url) {
    createProxyMiddleware({ target: url, changeOrigin: true })(req, res, next);
  } else {
    next();
  }
});

app.listen(3000);
