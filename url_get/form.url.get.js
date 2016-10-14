var fs = require('fs');
var http = require('http');
var url = require('url');
//url 中可以拿到 GET 请求的信息
	http.createServer(function(req,res){
		var urlObj = url.parse(req.url,true)
		if(urlObj.pathname == '/'){
			fs.createReadStream('./index.html').pipe(res)
		}else if(urlObj.pathname == '/login'){
			res.end(urlObj.query.username)
		}
	}).listen(3003)