function myReplace(str, before, after) {
  var newString = str;
  var beforeRegEx = new RegExp(before, 'i');

  //console.log(beforeRegEx);

  if (beforeRegEx.test(newString)){ //solo si está la palabra origen
    //console.log("Word found");
    var afterMinus = after;
    afterMinus = afterMinus.toLowerCase(); //reemplazo en mínus

    var wordString = newString.split(" ");
    for (var i = 0; i < wordString.length; i++){
      var mayusRegEx = /^[A-Z]/; //RegEx mayúscula inicial
      var mayus = mayusRegEx.test(wordString[i]); //máyus inicial?
      
      //wordString[i].replace(beforeRegEx, afterMinus); //sustituir
      if (beforeRegEx.test(wordString[i])) {
        //console.log("te pillé");
        wordString[i] = afterMinus;
      }

      if (mayus){ //si palabra original en máyus, capitalizar
        //console.log("Uppercase initial")
        wordString[i] = wordString[i][0].toUpperCase() + wordString[i].substr(1);
      } //fin if máyus
    } //fin recorrido array
    newString = wordString.join(" ");
  } //fin if palabra encontrada

  console.log(newString);
  return newString;
}

myReplace("A quick brown fox Jumped and jumped over the lazy dog", "jumped", "Leaped");
