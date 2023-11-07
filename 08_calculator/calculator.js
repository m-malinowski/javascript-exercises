const add = function(x,y) {
	return x+y;
};

const subtract = function(x,y) {
	return x-y
};

const sum = function(array) {
  if (array.length == 0){
    return 0
  }
  else{
    return array.reduce(add);
  }
};

const multiply = function(array) {
  return array.reduce((a, b) => a * b);
};

const power = function(x,y) {
	return x**y
};

const factorial = function(x) {
  let sum = 1
	for (let i = 1; i <= x; i++){
    sum *= i
  }
  return sum
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
