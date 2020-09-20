function addTogether() {
  //console.log(arguments[0]);
  var primerSumando = arguments[0];
  if (typeof primerSumando != "number"){ return undefined; }
  //console.log(arguments[1]);
  if (arguments.length == 2){
    //console.log(arguments[0] + arguments[1]);
    if (typeof arguments[1] != "number"){ return undefined; }
    return arguments[0] + arguments[1];
  } else if (arguments.length == 1){
    return function (newArg) {
      if (typeof newArg != "number"){ return undefined; }
      console.log ("Primer sumando: " + primerSumando);
      console.log ("Segundo sumando: " + newArg);
      console.log("suma: " + (primerSumando + newArg));
      return newArg + primerSumando; }
  } 
}

console.log(addTogether(2,"3"));
