const request = require('request');
const express = require('express');
const url = require('url');

const app = express();

app.get('/img', (req, res) => {
  const parsedUrl = url.parse(req.query.url);
  request({
    uri: req.query.url,
    headers: {
      Referer: `${parsedUrl.protocol}//${parsedUrl.host}`,
    },
  }).pipe(res);
});

app.listen(8888, () => {
  console.log('Image server listening on port 8888!');
});
