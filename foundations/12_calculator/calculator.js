const add = function (a, b) {
  return a + b;
};

const subtract = function (a, b) {
  return a - b;
};

const sum = function (num) {
  if (num.length === 0) {
    return 0;
  } else {
    return num.reduce((total, num) => total + num,0);
  }
};

const multiply = function (num) {
  if (num.length === 0) {
    return 0;
  } else {
    return num.reduce((total, num) => total * num, 1);
  }
};

const power = function (num, exp) {
    return num ** exp;
};

const factorial = function (num) {
  if (num === 0){
    return 1;
  } else{
      let result = 1;
      for (let i = 1; i <= num; i++) {
        result *= i;
        console.log(result);
      }
      return result;
  }
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial,
};
