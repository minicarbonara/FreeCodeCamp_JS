function dropElements(arr, func) {
  var newArray = [...arr];
  var cropped = 0;
  for (var i = 0; !func(newArray[i-cropped]) && i < newArray.length; i++){
    newArray.shift();
    cropped++;
  }

if (!func(newArray[0])) { newArray = []; }

  console.log(newArray);
  return newArray;
}

dropElements([1, 2, 3, 4], function(n) {return n > 5;}) ;
