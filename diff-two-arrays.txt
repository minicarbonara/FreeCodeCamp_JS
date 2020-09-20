function diffArray(arr1, arr2) {

  var newArr1 = arr2.filter(item => arr1.indexOf(item)<0);
  var newArr2 = arr1.filter(item => arr2.indexOf(item)<0);
  
  var finalArr = newArr1.concat(newArr2);

  console.log(finalArr);
  return finalArr;
}

diffArray([1, 2, 3, 5, 8], [1, 2, 3, 4, 5]);
