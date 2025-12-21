const repeatString = function (text, times) {
  let newText = "";
  if (times < 0) {
    return "ERROR";
  } else {
    for (let i = 1; i <= times; i++) {
      newText += text;
    }
    return newText;
  }
};

// Do not edit below this line
module.exports = repeatString;
