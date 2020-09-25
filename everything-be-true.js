function truthCheck(collection, pre) {
  var allTrue = collection.reduce((allTrue, object) => {
    if (!!object[pre]) { //si el key es truthy
      console.log("Key truthy evalúa a: " + !!object[pre]);
      console.log("El acumulador está en: " + !!allTrue);
      return ((true && !!allTrue)); //mantiene el acumulador en true, pero solo si ya lo estaba
    } else { //si el key es falsy
      console.log("Key falsy evalúa a: " + !!object[pre]);
      allTrue = false;
      console.log("El acumulador está en: " + !!allTrue);
      return false;
    }
  }, true);

  return !!allTrue;
}
console.log(truthCheck([{ "single": "" }, { "single": "double" }], "single"));

//console.log(!!"");