const HTTP = require('http');

const app = HTTP.createServer((req, res) => {
	console.log('Request Received...');
	
	res.write('Hi, This is the first part of the request');
	res.write('\n');
	res.write('This is the last part of the request');
	res.end();
});

app.listen(6789, () => {
	console.log('listening at port: 6789...');
});
