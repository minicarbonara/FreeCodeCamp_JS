function uniteUnique(arr) {
  var combined = [];

  for (var i = 0; i < arguments.length; i++){
    for (var j = 0; j < arguments[i].length; j++){
      // console.log(arguments[i][j]);
      if (combined.indexOf(arguments[i][j]) < 0){
        combined.push(arguments[i][j]);
      }
    }
  }

  //console.log(combined);
  return combined;
}

uniteUnique([1, 3, 2], [5, 2, 1, 4], [2, 1]);
