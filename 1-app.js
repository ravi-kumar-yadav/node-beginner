const HTTP = require('http');
const PORT = 3000;

const SERVER = HTTP.createServer(function (req, res){
	res.end('Hello World\n');
});


SERVER.listen(PORT, function(){
	console.log('Server is running at ', PORT, '...');
});
