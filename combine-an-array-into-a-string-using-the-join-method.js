function sentensify(str) {
  // Only change code below this line
var newStr = str;
var newArray = newStr.split(/\W/);
//console.log(newArray);
newStr = newArray.join(" ");
//console.log(newStr);
return newStr;
  // Only change code above this line
}
sentensify("May-the-force-be-with-you");
