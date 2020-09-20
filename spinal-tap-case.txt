function spinalCase(str) {
  var spinalString = str.replace(/\s+|_/g, "-");
  spinalString = spinalString.replace(/([a-z])([A-Z])/g, "$1-$2");
  spinalString = spinalString.toLowerCase();
  console.log(spinalString);
  return spinalString;
}

spinalCase('This IsSpinal_Tap');
