function destroyer(arr) {
  var cleanArr = [];
  var targets = [...arguments];
  targets.shift();
  //console.log(targets);

  cleanArr = arr.filter(item => targets.indexOf(item) < 0);
  //console.log(cleanArr);

  return cleanArr;
}

destroyer([1, 2, 3, 1, 2, 3], 2, 3);
