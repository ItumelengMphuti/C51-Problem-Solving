function createCounter(init) {
  let counter = init;

  function increment() {
    counter += 1;
    return counter;
  }

  function decrement() {
    counter -= 1;
    return counter;
  }

  function reset() {
    counter = init;
    return counter;
  }
  return {
    increment,
    decrement,
    reset,
  };
}

const counter = createCounter(7);

console.log(counter.increment());
// 6

console.log(counter.decrement());
// 6

console.log(counter.reset());
// 5
