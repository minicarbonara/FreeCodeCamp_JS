function orbitalPeriod(arr) {
  var GM = 398600.4418;
  var earthRadius = 6367.4447;
  var newArray = [];

  newArray = arr.map(function(object) {
    var newObject = {
      name : object.name,
      orbitalPeriod : Math.round(2 * Math.PI * Math.sqrt(Math.pow(earthRadius+object.avgAlt, 3)/GM))
    };
    return newObject;
  });

  /*
  PERIODO ORBITAL (en segundos)
  2Pi * Raíz cuadrada de radio al cubo entre GM
  Math.floor(2*Math.PI * Math.sqrt(Math.pow(earthRadius+h, 3)/GM)); 
  */
  return newArray;
}

console.log(orbitalPeriod([{name : "sputnik", avgAlt : 35873.5553}]));
