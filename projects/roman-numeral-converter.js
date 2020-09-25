function convertToRoman(num) {
  var romanArray = [];
  var romanString = "";
  var arabicNum = num;

  for (var i = 1; i <= Math.floor(arabicNum/1000); i++) {
    romanArray.push("M"); //tantas M como millares completos
  }
  arabicNum = arabicNum % 1000; //quitamos los millares

  if (arabicNum >= 900) {
    romanArray.push("CM");
    arabicNum -= 900;
  }

  if (arabicNum >= 500) {
    romanArray.push("D");
    arabicNum -= 500;
  } 

  if (arabicNum >= 400) {
    romanArray.push("CD");
    arabicNum -= 400;
  } 

  for (var i = 1; i <= Math.floor(arabicNum/100); i++) {
    romanArray.push("C"); //tantas C como centenas restantes
  }
  arabicNum = arabicNum % 100; //quitamos las centenas

  if (arabicNum >= 90) {
    romanArray.push("XC");
    arabicNum -= 90;
  }

  if (arabicNum >= 50) {
    romanArray.push("L");
    arabicNum -= 50;
  }

  if (arabicNum >= 40) {
    romanArray.push("XL");
    arabicNum -= 40;
  }  

  for (var i = 1; i <= Math.floor(arabicNum/10); i++) {
    romanArray.push("X"); //tantas X como decenas restantes
  }
  arabicNum = arabicNum % 10; //quitamos las decenas

  if (arabicNum >= 9) {
    romanArray.push("IX");
    arabicNum -= 9;
  }

  if (arabicNum >= 5) {
    romanArray.push("V");
    arabicNum -= 5;
  } 

  if (arabicNum >= 4) {
    romanArray.push("IV");
    arabicNum -= 4;
  } 

  for (var i = 1; i <= arabicNum; i++) {
    romanArray.push("I"); //tantas I como unidades restantes
  }

  romanString = romanArray.join("");
  return romanString;
}

console.log(convertToRoman(36));
