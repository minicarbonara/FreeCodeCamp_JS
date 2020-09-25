
function sumFibs(num) {
  /*if (num < 2) {
    return 1;
  } else {
    return (num + sumFibs(num - 1));
  }*/

  var value1 = 1; //valores para calcular el siguiente Fib
  var value2 = 1;
  var sum = 1;

  for (var nextNumber = 1; nextNumber <= num; nextNumber = value1 + value2) {
    sum += nextNumber * (nextNumber % 2); //suma solo impares
    value1 = value2; //sigue la cadena
    value2 = nextNumber;
  }

  return (sum);
}

console.log(sumFibs(75024));
