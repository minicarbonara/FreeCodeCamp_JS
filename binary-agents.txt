function binaryAgent(str) {
  var translatedString = "";
  var charArray = str.split(" ");

  for (var i = 0; i < charArray.length; i++){
    var binary = parseInt(charArray[i], 2);
    charArray[i] = String.fromCharCode(binary);
  }

  translatedString = charArray.join("");
  return translatedString;
}

console.log(binaryAgent("01000001 01110010 01100101 01101110 00100111 01110100 00100000 01100010 01101111 01101110 01100110 01101001 01110010 01100101 01110011 00100000 01100110 01110101 01101110 00100001 00111111"));
