var http = require('http');
var express = require('express');
const path = require('path');
const routes = require('express').Router();
const fs = require('fs');

const dataFolder = './data/';
const base = 'http://27.147.170.41:4211/file/';
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

app.set('view engine', 'ejs');

app.get('/', function(req, res) {

	var file_list = [];

	fs.readdirSync(dataFolder,{ withFileTypes: true }).forEach(file => {

	  if(file.isFile() && file.name.endsWith('.mkv')){
	  	file_list.push({name: file.name, dir: file.name, size : (fs.statSync(dataFolder+file.name).size/1024/1024/1024).toFixed(2)});
	  }
	  
	});

    res.render('pages/index',{
        files: file_list,
        base : base
    });
});


app.use('/file/',express.static('data'));
// app.use('/img',express.static('/home/openup/assets/img'));
app.use('/', routes);


var port = process.env.PORT || process.env.OPENSHIFT_NODEJS_PORT || 4211;
var   ip   = process.env.IP   || process.env.OPENSHIFT_NODEJS_IP || '0.0.0.0';




app.listen(port,ip);

console.log(port,ip);

