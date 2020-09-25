function palindrome(str) {
  var isItPalindrome = true;
  var cleanString = str.toLowerCase();

  var cleanArray = cleanString.split("");
  console.log(cleanArray);
  cleanArray = cleanArray.filter((item) => item.match(/[a-z0-9]/));
  console.log(cleanArray);
  cleanString = cleanArray.join("");

  for (var i = 0; i < cleanString.length/2; i++) {
    if (cleanString[i] != cleanString[cleanString.length - 1 - i]) isItPalindrome = false;
  }
  return isItPalindrome;
}



console.log(palindrome("%$.:_e,;y *e"));
