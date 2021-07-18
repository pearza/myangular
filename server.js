// server.js
var express = require('express');
var path = require('path');
var serveStatic = require('serve-static');

var app = express();
app.use(serveStatic(__dirname + "/dist"));
var port = 8080;

app.get(/.*/, (req, res) => res.sendFile(path.resolve(__dirname, 'dist/index.html')))

app.listen(port);