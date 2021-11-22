// You will not see this one!

const timer_id = setInterval(()=>{
	console.log('This won\'t execute :)');
}, 0);

clearInterval(timer_id);
