function fearNotLetter(str) {
  var missing;
  //console.log(str);
  var stringArray = str.split("");
  //console.log(stringArray);

  for (var i = 0; i < stringArray.length - 1; i++) { //recorre alfabéricamente la string
    console.log(stringArray[i] + ": " + stringArray[i].charCodeAt(0));
    if ((stringArray[i + 1].charCodeAt(0) - stringArray[i].charCodeAt(0)) > 1) {
      missing = String.fromCharCode(stringArray[i].charCodeAt(0) + 1);
      console.log(missing);
      return missing;
    }
  }

  console.log(missing);
  return missing;
}

fearNotLetter("abcdefghijklmnopqrstuvwxyz");
