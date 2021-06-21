const sum = n => {
  let result = n;
  function fn(s) {
    result += s;
    console.log(result);
    return fn;
  }
  return fn;
};

const sumValue = sum(1);
sumValue(2)(4);

const sub = n => {
  let result = n;
  function fn(s) {
    result -= s;
    console.log(result);
    return fn;
  }
  return fn;
};

const subVal = sub(48);
subVal(5)(5);

const mul = n => {
  let result = n;
  function fn(s) {
    result *= s;
    console.log(result);
    return fn;
  }
  return fn;
};

const div = n => {
  let result = n;
  function fn(s) {
    result /= s;
    console.log(result);
    return fn;
  }
  return fn;
};
