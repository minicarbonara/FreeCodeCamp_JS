function pairElement(str) {
  var dnaArray = [];
  var baseArray = str.split("");

  for (var i = 0; i < baseArray.length; i++){
    switch (baseArray[i]) {
      case "C" :
      case "c" :
        dnaArray.push(["C", "G"]);
        break;
      case "G" :
      case "g" :
        dnaArray.push(["G", "C"]);
        break;
      case "A" :
      case "a" :
        dnaArray.push(["A", "T"]);
        break;
      case "T" :
      case "t" :
        dnaArray.push(["T", "A"]);
        break;  
    }
  }

  console.log(dnaArray);
  return dnaArray;
}

pairElement("GCG");
