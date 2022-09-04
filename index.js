function isPalindrome(word) {
  // Write your algorithm here
  let regularExpression = /[\W_]/g
  let lowerString = word.toLowerCase().replace(regularExpression, ``);
  let reverandsplit = lowerString.split(``).reverse().join(``);
  return lowerString === reverandsplit;
}

/* 
  Add your pseudocode here
  Step1. Lowercase the string and use the RegularExpression to remove unwanted characters from it
  Step2. Use chaining method with built-in functions split, reverse and join
  Step3. Check if reverseStr is strictly equals to lowerString and return a Boolean 
*/

/*
  Add written explanation of your solution here
*/

// You can run `node index.js` to view these console logs
if (require.main === module) {
  // add your own custom tests in here
  console.log("Expecting: true");
  console.log("=>", isPalindrome("racecar"));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", isPalindrome("robot"));
}

module.exports = isPalindrome;
