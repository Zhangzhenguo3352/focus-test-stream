var querystring = require('querystring');
// querystring.parse()  字符串 转 对象
	var input = 'username==zhang@password==zhenguo'
	var obj = querystring.parse(input,'@','==')
	console.log(obj) // { username: 'zhang', password: 'zhenguo' }
// querystring.stringify() 对象 转 换字符串
	var stringify = querystring.stringify(obj,'@','==')
	console.log(stringify) // username==zhang@password==zhenguo