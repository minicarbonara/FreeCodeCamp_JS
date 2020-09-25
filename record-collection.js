// Setup
var collection = {
  2548: {
    album: "Slippery When Wet",
    artist: "Bon Jovi",
    tracks: [
      "Let It Rock",
      "You Give Love a Bad Name"
    ]
  },
  2468: {
    album: "1999",
    artist: "Prince",
    tracks: [
      "1999",
      "Little Red Corvette"
    ]
  },
  1245: {
    artist: "Robert Palmer",
    tracks: []
  },
  5439: {
    album: "ABBA Gold"
  }
};

// Only change code below this line
function updateRecords(id, prop, value) {
  var record = collection[id];
  if (value == "") { //property deletion
    if (record.hasOwnProperty(prop)) {
      delete record[prop];
      return collection;
    } //retur bc no need to check the rest
  } //end property deletion

  if (prop == "tracks") { //tracks update
    if (!record.hasOwnProperty("tracks")) { //in case there's no tracks property
      record.tracks = [];
    }
    record.tracks.push(value);
  } //end track update

  else { //artist or album update
    record[prop] = value;
  } //end artist update

  return collection;
}

updateRecords(5439, "artist", "ABBA");
