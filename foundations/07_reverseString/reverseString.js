const reverseString = function (text) {
  let newText = "";
  for (let i = 1; i <= text.length; i++) {
    newText += text.at(-i);
  }
  return newText;
};

// Do not edit below this line
module.exports = reverseString;
