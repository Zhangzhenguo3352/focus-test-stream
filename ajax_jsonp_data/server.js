var fs = require('fs');
var http = require('http');
var url = require('url');
//我要实现 客户端 设置响应头信息，达成跨域
	http.createServer(function(req,res){
		var urlObj = url.parse(req.url,true)
		if(urlObj.pathname == '/'){
			fs.createReadStream('./index.html').pipe(res)
		}else if(urlObj.pathname == '/ajax'){
			res.end('ajax')
		}
	}).listen(3005)



// 另外一台写的是
	//server.js

	// var fs = require('fs');
	// var http = require('http');
	// var url = require('url');
	// //我要实现 客户端 设置响应头信息，达成跨域
	// 	http.createServer(function(req,res){
	// 		//res.setHeader('Access-Control-Allow-Origin','*')
	// 		var urlObj = url.parse(req.url,true)
	// 		if(urlObj.pathname == '/'){
	// 			fs.createReadStream('./1.txt').pipe(res)
	// 		}else if(urlObj.pathname == '/ajax'){
	// 			res.end('url_ajax('+JSON.stringify([{"name":"zhang"}])+')')
	// 		}
	// 	}).listen(3003)

	// 