const palindromes = function (text) {
  let newText = text.toLowerCase().replace(/[^a-z0-9]/g, "");
  let compareText = newText.split("").reverse().join("");
  return compareText === newText ? true : false;
};

// Do not edit below this line
module.exports = palindromes;
