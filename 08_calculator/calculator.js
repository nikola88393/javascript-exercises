const add = function(a, b) {
	return parseInt(a) + parseInt(b);
};

const subtract = function(a, b) {
	return a - b
};

const sum = function(a) {
	let sum = 0;
  for(let i = 0; i < a.length; i++){
    sum += a[i];
  }
  return sum;
};

const multiply = function(a) {
  let multi = 1;
  for(let i = 0; i < a.length; i++){
    multi *= a[i];
  }
  return multi;
};

const power = function(a, b) {
	return Math.pow(a, b);
};

const factorial = function(a) {
  if(a > 0){
    return a * factorial(a - 1);
  }
  else{
    return 1;
  }
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
