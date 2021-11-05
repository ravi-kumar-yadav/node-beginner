// print "Hello after 4sec" and "Hello after 8sec" using only one method

const one = function(seconds) {
	console.log('Hello after ', seconds, 'sec');
}


setTimeout(one, 4 * 1000, 4);
setTimeout(one, 8 * 1000, 8);
