var fs = require('fs');
var http = require('http')
// 实现 流的方式完成post请求
	http.createServer(function(req,res){
		if(req.url == '/'){ 
			// 访问3001 端口 创建可读流，给了客户端 这个页面
			fs.createReadStream('./index.html').pipe(res)
		}else if(req.url == '/login'){
			// 提交表单的时候，会把请求体传过来 ，所以要接受请求体
			var buffer = []
			req.on('data',function(data){ // data 接受数据的方式
				buffer.push(data)
			})
			req.on('end',function(data){ // end 接受数据完成了以后
				var result = Buffer.concat(buffer) // 拼接buffer 数据
				res.end(result.toString())
			})
		}
	}).listen(3001)