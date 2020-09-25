function chunkArrayInGroups(arr, size) {
  console.log(`Dividir [${arr}] en grupos de ${size}`)
  let newArray = [];
  let newRow = [];
  var i = 0;
  var j = 0;

  if (size < 1) return newArray; //porsiaca
  if (size == 1) return arr;     //porsiaca

  do {
    do {
      newRow.push(arr[i]);
      i++;
      j++;
    } while ((i) % size != 0 && j < arr.length)
    newArray.push(newRow);
    newRow = [];
  } while (j < arr.length);


  console.log(newArray);
  return newArray;
}

chunkArrayInGroups(["a", "b", "c", "d"], 2);
