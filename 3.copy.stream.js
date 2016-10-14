var fs = require('fs');
// 流的方式 实现 copy



	function copy(file1,file2){
		var rs = fs.createReadStream(file1) // 读取蘑菇文件
		var ws = fs.createWriteStream(file2) // 写入
			ws.write(data) // 写入的数据
		rs.on('data',function(data){ // 接受数据
			var flag = ws.write(data)
			if(!flag){ // 写不进去了，这一通满了
				rs.pause() // 暂停
			}
		})
		rs.on('drain',function(){ //这一通完了
			rs.resume() // 继续写，继续填通
		})
	}
	copy('./1.txt','./2.txt')


// 上面 更佳正确
	function copy(file1,file2){
		var rs = fs.createReadStream(file1) // 读取蘑菇文件
		var ws = fs.createWriteStream(file2) // 写入
			ws.write(data) // 写入的数据
		rs.on('end',function(){ // 当读完的时候，也要关闭写入的文件
			
		})
	}
	copy('./1.txt','./2.txt')
//上面的 正确
	// function copy(file1,file2){
	// 	var rs = fs.createReadStream(file1) // 读取蘑菇文件
	// 	rs.on('data',function(data){ // 读取完成
	// 		var ws = fs.createWriteStream(file2) // 写入
	// 		ws.write(data) // 写入的数据
	// 	})
	// }
	// copy('./1.txt','./2.txt')
