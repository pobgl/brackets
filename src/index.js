module.exports = function check(str, bracketsConfig) {
  // your solution
   
  if (str.length <= 1) {
    return false;
  }    

  let matchingOpeningBracket, ch
  let stack = []

  const openingBrackets = [];
  const closingBrackets = [];

  bracketsConfig.forEach((item) => {
    openingBrackets.push(item[0]);
    closingBrackets.push(item[1]);
  });

  for (let i = 0; i < str.length; i++) {
    ch = str[i]

    if (closingBrackets.indexOf(ch) > -1) {
      matchingOpeningBracket = openingBrackets[closingBrackets.indexOf(ch)]
      if (stack.length == 0 || (stack.pop() != matchingOpeningBracket)) {
        return false
      }
    } else {
      stack.push(ch)
    }
  }

  return (stack.length == 0)
};
