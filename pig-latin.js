function translatePigLatin(str) {
  var pigString = str;
  if (!pigString.match(/[aeiou]/)) { //no vocales
    console.log(pigString + "ay");
    return pigString + "ay";
  }

  if (pigString.match(/^[aeiou]/)) { //vocal al principio
    console.log(pigString + "way");
    return pigString + "way";
  }

  pigString = pigString.replace(/^([b-df-hj-np-tv-z]*)(\w*)/, "$2"+"$1"+"ay");
  console.log(pigString);
  return pigString;
}

translatePigLatin("schmonsonant");
