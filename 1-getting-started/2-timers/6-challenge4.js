/*

Challenge 2:

  Just like Challenge 1 but this time with repeated delay values.
  Print Hello World 5 times with a delay of 100 ms.
  Then Print it again 5 more times with a delay of 200 ms.
  Then print it again 5 more times with a delay of 300 ms.
  And so on until the program is killed.

  Include the delay in the printed message:
  Hello World. 100
  Hello World. 100
  Hello World. 100
  Hello World. 100
  Hello World. 100
  Hello World. 200
  Hello World. 200
  Hello World. 200
  ...

  Constraints:
   - Only use setInterval (not setTimeout)
   - Use only ONE if statement

*/


let counter = 0;

let timer_id;

function foo(time_interval) {
	timer_id = setInterval(()=>{
		counter++;
		console.log('Hello World. ', time_interval);

		if (counter == 5){
			counter = 0;
			clearInterval(timer_id);
			time_interval += 100;
			foo(time_interval);
		}
	}, time_interval);
}

foo(100);
