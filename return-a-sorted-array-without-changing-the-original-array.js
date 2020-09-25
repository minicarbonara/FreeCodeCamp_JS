var globalArray = [5, 6, 3, 2, 9];
function nonMutatingSort(arr) {
  // Only change code below this line
  var orderedArray = [...arr];
  orderedArray.sort(function (a, b){
    return a === b ? 0 : a < b ? -1 : 1;
  });
  console.log(orderedArray);
  return orderedArray;
  // Only change code above this line
}
nonMutatingSort(globalArray);
