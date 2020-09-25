function rot13(original) {

  var origArray = original.split("");
  //console.log(origArray);

  var decodedArray = origArray.map(function (character) {
    if (character.match(/[A-M]/)) {
      //console.log(character);
      return String.fromCharCode(character.charCodeAt(0) + 13);
    }
    if (character.match(/[N-Z]/)) {
      //console.log(character);
      return String.fromCharCode(character.charCodeAt(0) - 13);
    }
    return character;
  })
  //console.log(decodedArray);
  var decoded = decodedArray.join("");
  return decoded;
}

console.log(rot13("ABCDEFGHIJKLM NOPQRSTUVWXYZ"));
