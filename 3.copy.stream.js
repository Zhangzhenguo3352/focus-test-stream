var fs = require('fs');
// 流的方式 实现 copy
	function copy(file1,file2){
		var rs = fs.createReadStream(file1) // 读取蘑菇文件
		rs.on('data',function(data){ // 读取完成
			var ws = fs.createWriteStream(file2) // 写入
			ws.write(data) // 写入的数据
		})
	}
	copy('./1.txt','./2.txt')
