var fs = require('fs');
var http = require('http');
// ajax + stream 的方式实现，请求体数据返回
	http.createServer(function(req,res){
		if(req.url == '/'){
			fs.createReadStream('./index.html').pipe(res)
		}else if(req.url == '/ajax'){
			//读取 post 请求体的信息
			var buffer = []
			req.on('data',function(data){
				buffer.push(data)
			})
			req.on('end',function(data){
				var result = Buffer.concat(buffer)
				res.end(result.toString())
			})
		}
	}).listen(3002)