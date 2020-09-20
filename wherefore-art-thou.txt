function whatIsInAName(collection, source) {
  var arr = [];
  // Only change code below this line
  arr = collection.filter(function (item) {
    var isit = true;
    for (var prop in source){
       if(item[prop] != source[prop]) isit = false;
    }
    return isit;
  });
  console.log(arr);
  // Only change code above this line
  return arr;
}

whatIsInAName([{ first: "Romeo", last: "Montague" }, { first: "Mercutio", last: null }, { first: "Tybalt", last: "Capulet" }], { last: "Capulet" });
