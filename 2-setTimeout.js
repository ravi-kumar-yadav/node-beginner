function print(salutation, name, message) {
	console.log('Hi ' + salutation, ' ', name, ': ', message);
}

setTimeout(print, 2 * 1000, 'Mr.', 'Balram', 'You are AWESOME!!!');
