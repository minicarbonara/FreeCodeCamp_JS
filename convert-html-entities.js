function convertHTML(str) {
  var charArray = str.split("");
  for (var i = 0; i < charArray.length; i++){
    switch (charArray[i]){
      case "&":
        charArray[i] = "&amp;";
        break;
      case "<":
        charArray[i] = "&lt;";
        break;
      case ">":
        charArray[i] = "&gt;";
        break;
      case '"':
        charArray[i] = "&quot;";
        break;
      case "'":
        charArray[i] = "&apos;";
        break;
    }
  }
  var urlString = charArray.join("");
  console.log(urlString);
  return urlString;
}

convertHTML("Dolce & Gabbana");
