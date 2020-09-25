function checkCashRegister(price, cash, cid) {
  var changeValue = Math.abs(cash - price); //asumimos el más alto como pago, no hay cambio negativo
  var statusObject = { status: "OPEN", change: [] };
  var cashValues = [0.01, 0.05, 0.1, 0.25, 1, 5, 10, 20, 100];
  var totalCash = (cid.reduce((sum, denomination) => sum + denomination[1], 0));
  //console.log(totalCash);
  if (changeValue > totalCash) return { status: "INSUFFICIENT_FUNDS", change: [] };
  if (changeValue == totalCash) return { status: "CLOSED", change: cid };
  for (var i = 8; i >= 0; i--) { //de denominación más alta hacia abajo
    var cash = 0;
    while (changeValue >= cashValues[i] && cid[i][1] > 0) {
      //mayor o igual que la denominación i y queda efectivo en cid[i]
      cash += cashValues[i]; //añadimos al fajo
      changeValue -= cashValues[i]; //restamos del cambio
      cid[i][1] -= cashValues[i]; //restamos de caja
    }
    //console.log(cash);
    if (cash) statusObject.change.push([cid[i][0], cash]);
  }
  if (changeValue > 0) { //si queda cambio por devolver
    if (changeValue > 0.1) return { status: "INSUFFICIENT_FUNDS", change: [] };
    else { //errores de valor entre 0 y 0.01
      changeValue = 0;
      //console.log(statusObject.change[(statusObject.change.length - 1)][1]);
      statusObject.change[statusObject.change.length - 1][1] += 0.01;
    }
  }
  return statusObject;
}
var caja = [["PENNY", 1.01], ["NICKEL", 2.05], ["DIME", 3.1], ["QUARTER", 4.25], ["ONE", 90], ["FIVE", 55], ["TEN", 20], ["TWENTY", 60], ["ONE HUNDRED", 100]];
console.log("Resultado:");
console.log(checkCashRegister(3.26, 100, caja));
console.log("Caja restante: " + caja);
