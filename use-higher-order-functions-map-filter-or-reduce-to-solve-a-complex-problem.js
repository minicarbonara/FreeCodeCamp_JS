const squareList = (arr) => {
  // Only change code below this line
  var filteredArray = arr.filter(value => (value % 1 == 0 && value >= 0));
  console.log(filteredArray);
  filteredArray = filteredArray.reduce((newArray, current) => {
    newArray.push(current * current);
    return newArray;
  }, []);
  return filteredArray;
  // Only change code above this line
};

const squaredIntegers = squareList([-3, 4.8, 5, 3, -3.2]);
console.log(squaredIntegers);
