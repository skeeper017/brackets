module.exports = function check(str, bracketsConfig) {

  let openBrackets = [];
  let closeBrackets = [];
  let testString = str.split('');

  // get list of open/close brackets
  for (let i = 0; i < bracketsConfig.length; i++) {
    openBrackets[i] = bracketsConfig[i][0];
    closeBrackets[i] = bracketsConfig[i][1];
	}

  let openBracketsCount = 0;
  let closeBracketsCount = 0;
  let equalBrackets = [];

  for (let i = 0; i < testString.length; i++) {
    // openBracketsCount
    openBracketsCount = openBrackets.indexOf(testString[i]);

    if (openBracketsCount !== -1) {
      equalBrackets.push(openBracketsCount);
    }

    // closeBracketsCount
    closeBracketsCount = closeBrackets.indexOf(testString[i]);
  
    if (closeBracketsCount !== -1) {
      openBracketsCount = equalBrackets.pop();

      if (closeBracketsCount !== openBracketsCount) {
        return false;
      }
    }
  }

  // if (openBracketsCount == equalBrackets.length) {
  //   return false;
  // }

  // even/odd number of brackets (odd => false)
  if (equalBrackets.length !== 0) {
    return false;
  }

  return true;
}
