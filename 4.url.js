var url = require('url')
// get 请求时 将 地址栏的 请求路径 转换成对象
// url.parse()
	console.log(url.parse('http://zhang:123@localhost:8080/index?username=zhangzhenguo&password=123456#top'))

	/*
		Url {
		  protocol: 'http:',  		协议
		  slashes: true,	  		有没有 这两个 // 
		  auth: 'zhang:123',   		用户名 和 密码
		  host: 'localhost:8080',	主机
		  port: '8080',				端口
		  hostname: 'localhost',	主机名
		  hash: '#top',				哈希值
		  search: '?username=zhangzhenguo&password=123456',		查询字符串
		  query: 'username=zhangzhenguo&password=123456',		查询字符串内容
		  pathname: '/index',									端口号和 ？ 好中间部分
		  path: '/index?username=zhangzhenguo&password=123456',	false默认 ，true 是 user.parse(xxx,true) 的参数 ，true 是否将这行字符串转换成对象
		  href: 'http://zhang:123@localhost:8080/index?username=zhangzhenguo&password=123456#top' 
		}

	*/

// user.parse(xxx, true)  是 true 的情况
	console.log(url.parse('http://zhang:123@localhost:8080/index?username=zhangzhenguo&password=123456#top',true))

	/*
		Url {
		  protocol: 'http:',
		  slashes: true,
		  auth: 'zhang:123',
		  host: 'localhost:8080',
		  port: '8080',
		  hostname: 'localhost',
		  hash: '#top',
		  search: '?username=zhangzhenguo&password=123456',
		  query: { username: 'zhangzhenguo', password: '123456' },   // user.parse(xxx,true) 为true 的结果 转换成对象
 		  pathname: '/index',
		  path: '/index?username=zhangzhenguo&password=123456',
		  href: 'http://zhang:123@localhost:8080/index?username=zhangzhenguo&password=123456#top' 
		}

	*/

// 把一个对象转换成 一个字符串
	var urlObj = url.parse('http://zhang:123@localhost:8080/index?username=zhangzhenguo&password=123456#top',true)
	console.log(url.format(urlObj)) 
	// 	http://zhang:123@localhost:8080/index?username=zhangzhenguo&password=123456#top
