setTimeout(()=>{
	console.log('MayBe after 0.5sec, MAY BE!');
}, 500)

for (let i=0; i<1e10; i++){
	// Block Node Synchronously
};

console.log('After FOR Loop');
