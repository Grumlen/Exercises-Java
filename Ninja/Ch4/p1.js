var fib = [1,1];
function fibonacci(place) {
  if(fib[place-1]) { return console.log(fib[place-1]); }
  else {
    fib.push(fib[fib.length-1]+fib[fib.length-2]);
    fibonacci(place);
  }
}
fibonacci(4);
fibonacci(9);
