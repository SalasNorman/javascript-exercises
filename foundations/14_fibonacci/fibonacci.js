const fibonacci = function (num) {
  if (Math.sign(num) === -1) {
    return "OOPS";
  } else {
    let prev1 = 0;
    let prev2 = 1;
    let curr = 0;
    for (let i = 1; i <= num; i++) {
      curr = prev1 + prev2;
      prev2 = prev1;
      prev1 = curr;
    }
    return curr;
  }
};

// Do not edit below this line
module.exports = fibonacci;
