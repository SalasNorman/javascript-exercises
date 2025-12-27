const sumAll = function (a, b) {
  let total = 0;
  if (Number.isInteger(a) && a > 0 && Number.isInteger(b) && b > 0) {
    if (a < b) {
      for (; a <= b; a++) {
        total += a;
      }
    } else if (b < a) {
      for (; b <= a; b++) {
        total += b;
      }
    }
  } else {
    return "ERROR";
  }
  return total;
};

// Do not edit below this line
module.exports = sumAll;
