// Only change code below this line
function urlSlug(title) {

  var urlString = title.toLowerCase(); //todo a minúsculas
  var urlArray = urlString.split(/\s+/); //separar palabras, quitando espacios repetidos

  urlArray = urlArray.reduce((newArray, current) => {
    if (current.match(/\W/)) { //si hay caracteres no alfanuméricos
      var thisString = current.split("");
      thisString = thisString.filter(item => item.match(/\w/)); //limpiar caracteres no alfanuméricos
      current = thisString.join("");
    }
    console.log(current);
    newArray.push(current);
    return newArray;
  }, []);
  urlArray = urlArray.filter(item => item != ""); //quitar huecos

  urlString = urlArray.join("-");
  console.log(urlString);
  return urlString;
}
// Only change code above this line

urlSlug(" This is a test!");