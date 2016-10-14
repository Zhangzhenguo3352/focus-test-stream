var fs = require('fs');
//创建 可读流
	// 123456789
	var rs = fs.createReadStream('./1.txt',{
		flags:'r',  //表示打开文件之后想干什么 'r' 读，（'w' 写），默认是'r' 
		encoding:'utf-8', // 得到对象使Buffer 对象，如果指定编码那么得到就是字符串类型
		start:3, // 开始 读取的字节数的索引 位置
		end:5,    // 结束 读取的字节数的索引 位置
		highWaterMark:1  // 一次一次 输出 
	})
	// 流是 EventEmitter 的子类
	rs.on('data',function(data){
		console.log(data) // 456
	})
	// 当读完文件的时候 会触发 end 事件
	rs.on('end',function(){
		console.log('文件读完了')
	})
	// 读取文件出错时触发 error 事件
	rs.on('error',function(err){
		console.log('读取文件失败'+err)
	})

// 可读流 暂停 和 恢复
	var rs_1 = fs.createReadStream('./1.txt',{
		highWaterMark:4,
		encoding:'utf-8'
	})
	rs_1.on('data',function(data){
		console.log(data)
		rs_1.pause(); // 暂停触发、继续走下去
	})
	setTimeout(function(){
		rs_1.resume(); // 重新开始 触发data 事件，5秒恢复执行
	},5000)
	rs_1.on('end',function(){
		console.log('读完了')
	})


