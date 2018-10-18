const express = require('express');
const app = express();
const path = require('path');
const http = require('http');

const port = process.env.PORT || 8080;

app.use(express.static(__dirname + '/dist/front-end'));

app.listen(process.env.PORT || 8080);

app.get('/*', function(req, res) {
  res.sendFile(path.join(__dirname));
});
