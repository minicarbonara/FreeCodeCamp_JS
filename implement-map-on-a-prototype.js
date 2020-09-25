// The global variable
var s = [23, 65, 98, 5];

Array.prototype.myMap = function (callback) {
  console.log(this); //muestra array de entrada
  var newArray = [...this];

  // Only change code below this line

  //newArray.forEach(callback(var elem));
  for (var i = 0; i < newArray.length; i++) {
    newArray[i] = callback(newArray[i]);
  }

  // Only change code above this line

  console.log(newArray); //muestra array de salida
  return newArray;

};

var new_s = s.myMap(function (item) {
  return item * 2;
});
