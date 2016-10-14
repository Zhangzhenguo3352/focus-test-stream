var fs = require('fs');
// 可写流 
	var ws = fs.createWriteStream('./1.txt',{
		flags:'a', //（ r=》读取 ） （ w=》清空并写入 ） （ a=》append追加并写入 ）
		start:3,   // 从第几个字节开始写 ，写入并替换
		encoing:'utf-8', // 写入的编码类型，默认 null
		// highWaterMark:''
	});
	ws.write('a');
	ws.write('b');
	ws.end('c')

// 验证 highWaterMark 一次写多少,和写完之后继续写
	var ws_1 = fs.createWriteStream('./1.txt',{
		flags:'a',
		highWaterMark:1 // 这一桶能装 多少就可以倒了

	});
	var i = 0;	   
	var max  = 10; // 一共有的数量
	function write(){   
		console.log('继续写入'+i)
		var flag = true;
		while(i<max && flag){ //当循环小于总共的数量 并且 这一桶可以继续倒的时候
			var flag = ws_1.write(String(i++)) // write 有返回值，true可以写，
		}
	}
	ws_1.on('drain',function(){ // 监听这一桶写入完成 事件
		console.log('这一桶完成'+i)
		write() // 继续写
	})
	write()













