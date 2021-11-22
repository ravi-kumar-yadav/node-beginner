/*
const theOneFunc = () => {};

setTimeout(theOneFunc, 4 * 1000);

// Hello after 4 seconds

// Hello after 8 seconds

// You can define only ONE function

*/

const theOneFunc = (timer) => {
	console.log('Hello after ', timer, ' seconds');
}

setTimeout(theOneFunc, 4000, 4);
setTimeout(theOneFunc, 8000, 8);

