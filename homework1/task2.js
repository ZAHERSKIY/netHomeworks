const memo = (fn, timer) => {
  let cache = {};

  return n => {
    if (cache[n]) {
      return cache[n];
    }

    return (cache[n] = fn(n));
  };
};

const factorial = memo(num => {
  return !num || num == 1 ? 1 : num * factorial(num - 1);
});

console.log(factorial(5));
console.log(factorial(5));
