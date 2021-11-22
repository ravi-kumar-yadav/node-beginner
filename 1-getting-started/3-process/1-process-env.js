setTimeout(()=> {
	console.log('Calling process.exit()');
	process.exit();
}, 100);

console.log('Current user is: ', process.env.USER);

console.log('Custom value1: ', process.env.VAL1);
console.log('Custom value2: ', process.env.VAL2);

process.on('exit', ()=>{
	console.log('Going to exit now! See you later!');
});

