var flatArray = [];

function steamrollArray(arr) {

  if (Array.isArray(arr)){ //si arr ES un array
    var newArray = [];
    for (var i=0; i<arr.length; i++){
      newArray.push(...steamrollArray(arr[i]));
    }
    return (newArray);

  } else { return [arr]; } //si es un valor suelto, devuelve el valor
  
}
var num = 1;
var booleano = true;
var string = "patata";
var objeto = { clave: "valor"};
var array = [];

//console.log(objeto[0]);
console.log(typeof array);
//console.log(flatArray);

console.log(steamrollArray([1, [], [3, [[4]]]]));
