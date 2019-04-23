var http = require('http');
var express = require('express');
const path = require('path');
const routes = require('express').Router();

// routes.get('*', function (req, res) {
//   res.sendFile(path.join(__dirname + '/dist/index.html'));
// });

// var app = express();
// app.use(express.static('dist'));
// app.use('/img',express.static('/home/openup/assets/img'));
// app.use('/', routes);


// routes.get('*', function (req, res) {
//   res.sendFile(path.join(__dirname + '/dist/index.html'));
// });

var app = express();
app.use('/got/',express.static('data'));
// app.use('/img',express.static('/home/openup/assets/img'));
app.use('/', routes);


var port = process.env.PORT || process.env.OPENSHIFT_NODEJS_PORT || 7011;
var   ip   = process.env.IP   || process.env.OPENSHIFT_NODEJS_IP || '0.0.0.0';




app.listen(port,ip);

console.log(port,ip);

